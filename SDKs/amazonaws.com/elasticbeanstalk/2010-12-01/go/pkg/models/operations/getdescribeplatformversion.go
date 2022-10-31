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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
