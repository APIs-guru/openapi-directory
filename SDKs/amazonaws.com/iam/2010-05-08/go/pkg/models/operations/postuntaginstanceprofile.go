package operations

type PostUntagInstanceProfileActionEnum string

const (
	PostUntagInstanceProfileActionEnumUntagInstanceProfile PostUntagInstanceProfileActionEnum = "UntagInstanceProfile"
)

type PostUntagInstanceProfileVersionEnum string

const (
	PostUntagInstanceProfileVersionEnumTwoThousandAndTen0508 PostUntagInstanceProfileVersionEnum = "2010-05-08"
)

type PostUntagInstanceProfileQueryParams struct {
	Action  PostUntagInstanceProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUntagInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUntagInstanceProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUntagInstanceProfileRequest struct {
	QueryParams PostUntagInstanceProfileQueryParams
	Headers     PostUntagInstanceProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUntagInstanceProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
