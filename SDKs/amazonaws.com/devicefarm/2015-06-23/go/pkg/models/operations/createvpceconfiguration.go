package operations

import (
"openapi/pkg/models/shared")


type CreateVpceConfigurationXAmzTargetEnum string

const (
    CreateVpceConfigurationXAmzTargetEnumDeviceFarm20150623CreateVpceConfiguration CreateVpceConfigurationXAmzTargetEnum = "DeviceFarm_20150623.CreateVPCEConfiguration"
)


type CreateVpceConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateVpceConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateVpceConfigurationRequest struct {
    Headers CreateVpceConfigurationHeaders 
    Request shared.CreateVpceConfigurationRequest `request:"mediaType=application/json"`
    
}

type CreateVpceConfigurationResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    CreateVpceConfigurationResult *shared.CreateVpceConfigurationResult 
    LimitExceededException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

