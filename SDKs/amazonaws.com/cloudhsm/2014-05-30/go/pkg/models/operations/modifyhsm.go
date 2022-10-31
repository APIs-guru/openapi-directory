package operations

import (
"openapi/pkg/models/shared")


type ModifyHsmXAmzTargetEnum string

const (
    ModifyHsmXAmzTargetEnumCloudHsmFrontendServiceModifyHsm ModifyHsmXAmzTargetEnum = "CloudHsmFrontendService.ModifyHsm"
)


type ModifyHsmHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ModifyHsmXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ModifyHsmRequest struct {
    Headers ModifyHsmHeaders 
    Request shared.ModifyHsmRequest `request:"mediaType=application/json"`
    
}

type ModifyHsmResponse struct {
    CloudHsmInternalException *interface{} 
    CloudHsmServiceException *interface{} 
    ContentType string 
    InvalidRequestException *interface{} 
    ModifyHsmResponse *shared.ModifyHsmResponse 
    StatusCode int64 
    
}

