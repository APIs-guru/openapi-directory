package operations



type UpdateDeviceDefinitionPathParams struct {
    DeviceDefinitionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionId"`
    
}

type UpdateDeviceDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateDeviceDefinitionRequestBody struct {
    Name *string `json:"Name,omitempty"`
    
}

type UpdateDeviceDefinitionRequest struct {
    PathParams UpdateDeviceDefinitionPathParams 
    Headers UpdateDeviceDefinitionHeaders 
    Request UpdateDeviceDefinitionRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDeviceDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    StatusCode int64 
    UpdateDeviceDefinitionResponse map[string]interface{} 
    
}

