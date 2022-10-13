package operations

type PostDescribePlatformVersionActionEnum string

const (
	PostDescribePlatformVersionActionEnumDescribePlatformVersion PostDescribePlatformVersionActionEnum = "DescribePlatformVersion"
)

type PostDescribePlatformVersionVersionEnum string

const (
	PostDescribePlatformVersionVersionEnumTwoThousandAndTen1201 PostDescribePlatformVersionVersionEnum = "2010-12-01"
)

type PostDescribePlatformVersionQueryParams struct {
	Action  PostDescribePlatformVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribePlatformVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribePlatformVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribePlatformVersionRequest struct {
	QueryParams PostDescribePlatformVersionQueryParams
	Headers     PostDescribePlatformVersionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribePlatformVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
