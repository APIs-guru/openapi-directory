package operations

type PostCreatePlatformVersionActionEnum string

const (
	PostCreatePlatformVersionActionEnumCreatePlatformVersion PostCreatePlatformVersionActionEnum = "CreatePlatformVersion"
)

type PostCreatePlatformVersionVersionEnum string

const (
	PostCreatePlatformVersionVersionEnumTwoThousandAndTen1201 PostCreatePlatformVersionVersionEnum = "2010-12-01"
)

type PostCreatePlatformVersionQueryParams struct {
	Action  PostCreatePlatformVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreatePlatformVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreatePlatformVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreatePlatformVersionRequest struct {
	QueryParams PostCreatePlatformVersionQueryParams
	Headers     PostCreatePlatformVersionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreatePlatformVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
