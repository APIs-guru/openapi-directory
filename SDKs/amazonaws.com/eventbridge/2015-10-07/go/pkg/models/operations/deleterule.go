package operations

import (
"openapi/pkg/models/shared")


type DeleteRuleXAmzTargetEnum string

const (
    DeleteRuleXAmzTargetEnumAwsEventsDeleteRule DeleteRuleXAmzTargetEnum = "AWSEvents.DeleteRule"
)


type DeleteRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteRuleRequest struct {
    Headers DeleteRuleHeaders 
    Request shared.DeleteRuleRequest `request:"mediaType=application/json"`
    
}

type DeleteRuleResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalException *interface{} 
    ManagedRuleException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

