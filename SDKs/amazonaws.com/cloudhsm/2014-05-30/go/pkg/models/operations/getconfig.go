package operations

import (
"openapi/pkg/models/shared")


type GetConfigXAmzTargetEnum string

const (
    GetConfigXAmzTargetEnumCloudHsmFrontendServiceGetConfig GetConfigXAmzTargetEnum = "CloudHsmFrontendService.GetConfig"
)


type GetConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetConfigRequest struct {
    Headers GetConfigHeaders 
    Request shared.GetConfigRequest `request:"mediaType=application/json"`
    
}

type GetConfigResponse struct {
    CloudHsmInternalException *interface{} 
    CloudHsmServiceException *interface{} 
    ContentType string 
    GetConfigResponse *shared.GetConfigResponse 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

