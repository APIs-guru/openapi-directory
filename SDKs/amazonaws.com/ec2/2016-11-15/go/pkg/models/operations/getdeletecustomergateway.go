package operations

type GetDeleteCustomerGatewayActionEnum string

const (
	GetDeleteCustomerGatewayActionEnumDeleteCustomerGateway GetDeleteCustomerGatewayActionEnum = "DeleteCustomerGateway"
)

type GetDeleteCustomerGatewayVersionEnum string

const (
	GetDeleteCustomerGatewayVersionEnumTwoThousandAndSixteen1115 GetDeleteCustomerGatewayVersionEnum = "2016-11-15"
)

type GetDeleteCustomerGatewayQueryParams struct {
	Action            GetDeleteCustomerGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CustomerGatewayID string                              `queryParam:"style=form,explode=true,name=CustomerGatewayId"`
	DryRun            *bool                               `queryParam:"style=form,explode=true,name=DryRun"`
	Version           GetDeleteCustomerGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteCustomerGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteCustomerGatewayRequest struct {
	QueryParams GetDeleteCustomerGatewayQueryParams
	Headers     GetDeleteCustomerGatewayHeaders
}

type GetDeleteCustomerGatewayResponse struct {
	ContentType string
	StatusCode  int64
}
