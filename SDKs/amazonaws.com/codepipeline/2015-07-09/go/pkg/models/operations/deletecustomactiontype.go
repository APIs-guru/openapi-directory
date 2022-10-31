package operations

import (
"openapi/pkg/models/shared")


type DeleteCustomActionTypeXAmzTargetEnum string

const (
    DeleteCustomActionTypeXAmzTargetEnumCodePipeline20150709DeleteCustomActionType DeleteCustomActionTypeXAmzTargetEnum = "CodePipeline_20150709.DeleteCustomActionType"
)


type DeleteCustomActionTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteCustomActionTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteCustomActionTypeRequest struct {
    Headers DeleteCustomActionTypeHeaders 
    Request shared.DeleteCustomActionTypeInput `request:"mediaType=application/json"`
    
}

type DeleteCustomActionTypeResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    StatusCode int64 
    ValidationException *interface{} 
    
}

