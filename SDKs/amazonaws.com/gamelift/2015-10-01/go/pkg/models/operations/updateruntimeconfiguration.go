package operations

import (
"openapi/pkg/models/shared")


type UpdateRuntimeConfigurationXAmzTargetEnum string

const (
    UpdateRuntimeConfigurationXAmzTargetEnumGameLiftUpdateRuntimeConfiguration UpdateRuntimeConfigurationXAmzTargetEnum = "GameLift.UpdateRuntimeConfiguration"
)


type UpdateRuntimeConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateRuntimeConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateRuntimeConfigurationRequest struct {
    Headers UpdateRuntimeConfigurationHeaders 
    Request shared.UpdateRuntimeConfigurationInput `request:"mediaType=application/json"`
    
}

type UpdateRuntimeConfigurationResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidFleetStatusException *interface{} 
    InvalidRequestException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    UpdateRuntimeConfigurationOutput *shared.UpdateRuntimeConfigurationOutput 
    
}

