package operations

type GetDescribePlatformVersionActionEnum string

const (
	GetDescribePlatformVersionActionEnumDescribePlatformVersion GetDescribePlatformVersionActionEnum = "DescribePlatformVersion"
)

type GetDescribePlatformVersionVersionEnum string

const (
	GetDescribePlatformVersionVersionEnumTwoThousandAndTen1201 GetDescribePlatformVersionVersionEnum = "2010-12-01"
)

type GetDescribePlatformVersionQueryParams struct {
	Action      GetDescribePlatformVersionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PlatformArn *string                               `queryParam:"style=form,explode=true,name=PlatformArn"`
	Version     GetDescribePlatformVersionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribePlatformVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribePlatformVersionRequest struct {
	QueryParams GetDescribePlatformVersionQueryParams
	Headers     GetDescribePlatformVersionHeaders
}

type GetDescribePlatformVersionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
