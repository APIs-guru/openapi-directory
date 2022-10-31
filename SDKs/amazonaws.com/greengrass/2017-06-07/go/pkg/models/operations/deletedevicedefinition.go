package operations



type DeleteDeviceDefinitionPathParams struct {
    DeviceDefinitionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionId"`
    
}

type DeleteDeviceDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteDeviceDefinitionRequest struct {
    PathParams DeleteDeviceDefinitionPathParams 
    Headers DeleteDeviceDefinitionHeaders 
    
}

type DeleteDeviceDefinitionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteDeviceDefinitionResponse map[string]interface{} 
    StatusCode int64 
    
}

