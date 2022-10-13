package operations

type GetDeleteEgressOnlyInternetGatewayActionEnum string

const (
	GetDeleteEgressOnlyInternetGatewayActionEnumDeleteEgressOnlyInternetGateway GetDeleteEgressOnlyInternetGatewayActionEnum = "DeleteEgressOnlyInternetGateway"
)

type GetDeleteEgressOnlyInternetGatewayVersionEnum string

const (
	GetDeleteEgressOnlyInternetGatewayVersionEnumTwoThousandAndSixteen1115 GetDeleteEgressOnlyInternetGatewayVersionEnum = "2016-11-15"
)

type GetDeleteEgressOnlyInternetGatewayQueryParams struct {
	Action                      GetDeleteEgressOnlyInternetGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                      *bool                                         `queryParam:"style=form,explode=true,name=DryRun"`
	EgressOnlyInternetGatewayID string                                        `queryParam:"style=form,explode=true,name=EgressOnlyInternetGatewayId"`
	Version                     GetDeleteEgressOnlyInternetGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteEgressOnlyInternetGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteEgressOnlyInternetGatewayRequest struct {
	QueryParams GetDeleteEgressOnlyInternetGatewayQueryParams
	Headers     GetDeleteEgressOnlyInternetGatewayHeaders
}

type GetDeleteEgressOnlyInternetGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
