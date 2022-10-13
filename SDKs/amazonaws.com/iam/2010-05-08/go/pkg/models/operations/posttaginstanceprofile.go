package operations

type PostTagInstanceProfileActionEnum string

const (
	PostTagInstanceProfileActionEnumTagInstanceProfile PostTagInstanceProfileActionEnum = "TagInstanceProfile"
)

type PostTagInstanceProfileVersionEnum string

const (
	PostTagInstanceProfileVersionEnumTwoThousandAndTen0508 PostTagInstanceProfileVersionEnum = "2010-05-08"
)

type PostTagInstanceProfileQueryParams struct {
	Action  PostTagInstanceProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostTagInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostTagInstanceProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostTagInstanceProfileRequest struct {
	QueryParams PostTagInstanceProfileQueryParams
	Headers     PostTagInstanceProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostTagInstanceProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
