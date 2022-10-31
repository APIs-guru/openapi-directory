package operations

import (
"openapi/pkg/models/shared")


type UpdateActionTypeXAmzTargetEnum string

const (
    UpdateActionTypeXAmzTargetEnumCodePipeline20150709UpdateActionType UpdateActionTypeXAmzTargetEnum = "CodePipeline_20150709.UpdateActionType"
)


type UpdateActionTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateActionTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateActionTypeRequest struct {
    Headers UpdateActionTypeHeaders 
    Request shared.UpdateActionTypeInput `request:"mediaType=application/json"`
    
}

type UpdateActionTypeResponse struct {
    ActionTypeNotFoundException *interface{} 
    ContentType string 
    RequestFailedException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

