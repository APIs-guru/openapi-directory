package operations

type GetDetachInternetGatewayActionEnum string

const (
	GetDetachInternetGatewayActionEnumDetachInternetGateway GetDetachInternetGatewayActionEnum = "DetachInternetGateway"
)

type GetDetachInternetGatewayVersionEnum string

const (
	GetDetachInternetGatewayVersionEnumTwoThousandAndSixteen1115 GetDetachInternetGatewayVersionEnum = "2016-11-15"
)

type GetDetachInternetGatewayQueryParams struct {
	Action            GetDetachInternetGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun            *bool                               `queryParam:"style=form,explode=true,name=DryRun"`
	InternetGatewayID string                              `queryParam:"style=form,explode=true,name=InternetGatewayId"`
	Version           GetDetachInternetGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID             string                              `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetDetachInternetGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDetachInternetGatewayRequest struct {
	QueryParams GetDetachInternetGatewayQueryParams
	Headers     GetDetachInternetGatewayHeaders
}

type GetDetachInternetGatewayResponse struct {
	ContentType string
	StatusCode  int64
}
