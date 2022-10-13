package operations

type UpdateGatewayPathParams struct {
	GatewayID string `pathParam:"style=simple,explode=false,name=gatewayId"`
}

type UpdateGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateGatewayRequestBody struct {
	GatewayName string `json:"gatewayName"`
}

type UpdateGatewayRequest struct {
	PathParams UpdateGatewayPathParams
	Headers    UpdateGatewayHeaders
	Request    UpdateGatewayRequestBody `request:"mediaType=application/json"`
}

type UpdateGatewayResponse struct {
	ConflictingOperationException *interface{}
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
