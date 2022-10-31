package operations

import (
"openapi/pkg/models/shared")

type CreateDeviceDefinitionVersionPathParams struct {
    DeviceDefinitionID string `pathParam:"style=simple,explode=false,name=DeviceDefinitionId"`
    
}

type CreateDeviceDefinitionVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmznClientToken *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
    
}

type CreateDeviceDefinitionVersionRequestBody struct {
    Devices []shared.Device `json:"Devices,omitempty"`
    
}

type CreateDeviceDefinitionVersionRequest struct {
    PathParams CreateDeviceDefinitionVersionPathParams 
    Headers CreateDeviceDefinitionVersionHeaders 
    Request CreateDeviceDefinitionVersionRequestBody `request:"mediaType=application/json"`
    
}

type CreateDeviceDefinitionVersionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateDeviceDefinitionVersionResponse *shared.CreateDeviceDefinitionVersionResponse 
    StatusCode int64 
    
}

