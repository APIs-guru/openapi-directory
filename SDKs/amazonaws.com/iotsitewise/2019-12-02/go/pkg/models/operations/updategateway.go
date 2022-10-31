package operations



type UpdateGatewayPathParams struct {
    GatewayID string `pathParam:"style=simple,explode=false,name=gatewayId"`
    
}

type UpdateGatewayHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateGatewayRequestBody struct {
    GatewayName string `json:"gatewayName"`
    
}

type UpdateGatewayRequest struct {
    PathParams UpdateGatewayPathParams 
    Headers UpdateGatewayHeaders 
    Request UpdateGatewayRequestBody `request:"mediaType=application/json"`
    
}

type UpdateGatewayResponse struct {
    ConflictingOperationException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

