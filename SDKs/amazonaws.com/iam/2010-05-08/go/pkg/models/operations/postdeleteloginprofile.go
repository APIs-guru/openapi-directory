package operations

type PostDeleteLoginProfileActionEnum string

const (
	PostDeleteLoginProfileActionEnumDeleteLoginProfile PostDeleteLoginProfileActionEnum = "DeleteLoginProfile"
)

type PostDeleteLoginProfileVersionEnum string

const (
	PostDeleteLoginProfileVersionEnumTwoThousandAndTen0508 PostDeleteLoginProfileVersionEnum = "2010-05-08"
)

type PostDeleteLoginProfileQueryParams struct {
	Action  PostDeleteLoginProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteLoginProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteLoginProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteLoginProfileRequest struct {
	QueryParams PostDeleteLoginProfileQueryParams
	Headers     PostDeleteLoginProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteLoginProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
