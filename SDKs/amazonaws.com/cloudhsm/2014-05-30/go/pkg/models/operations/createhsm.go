package operations

import (
"openapi/pkg/models/shared")


type CreateHsmXAmzTargetEnum string

const (
    CreateHsmXAmzTargetEnumCloudHsmFrontendServiceCreateHsm CreateHsmXAmzTargetEnum = "CloudHsmFrontendService.CreateHsm"
)


type CreateHsmHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateHsmXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateHsmRequest struct {
    Headers CreateHsmHeaders 
    Request shared.CreateHsmRequest `request:"mediaType=application/json"`
    
}

type CreateHsmResponse struct {
    CloudHsmInternalException *interface{} 
    CloudHsmServiceException *interface{} 
    ContentType string 
    CreateHsmResponse *shared.CreateHsmResponse 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

