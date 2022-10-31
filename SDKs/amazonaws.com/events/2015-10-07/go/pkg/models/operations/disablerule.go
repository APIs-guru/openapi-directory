package operations

import (
"openapi/pkg/models/shared")


type DisableRuleXAmzTargetEnum string

const (
    DisableRuleXAmzTargetEnumAwsEventsDisableRule DisableRuleXAmzTargetEnum = "AWSEvents.DisableRule"
)


type DisableRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisableRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisableRuleRequest struct {
    Headers DisableRuleHeaders 
    Request shared.DisableRuleRequest `request:"mediaType=application/json"`
    
}

type DisableRuleResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalException *interface{} 
    ManagedRuleException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

