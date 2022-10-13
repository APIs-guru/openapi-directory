package operations

type GetDeleteInternetGatewayActionEnum string

const (
	GetDeleteInternetGatewayActionEnumDeleteInternetGateway GetDeleteInternetGatewayActionEnum = "DeleteInternetGateway"
)

type GetDeleteInternetGatewayVersionEnum string

const (
	GetDeleteInternetGatewayVersionEnumTwoThousandAndSixteen1115 GetDeleteInternetGatewayVersionEnum = "2016-11-15"
)

type GetDeleteInternetGatewayQueryParams struct {
	Action            GetDeleteInternetGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun            *bool                               `queryParam:"style=form,explode=true,name=DryRun"`
	InternetGatewayID string                              `queryParam:"style=form,explode=true,name=InternetGatewayId"`
	Version           GetDeleteInternetGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteInternetGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteInternetGatewayRequest struct {
	QueryParams GetDeleteInternetGatewayQueryParams
	Headers     GetDeleteInternetGatewayHeaders
}

type GetDeleteInternetGatewayResponse struct {
	ContentType string
	StatusCode  int64
}
