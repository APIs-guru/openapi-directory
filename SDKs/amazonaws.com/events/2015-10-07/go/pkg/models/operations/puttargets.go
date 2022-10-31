package operations

import (
"openapi/pkg/models/shared")


type PutTargetsXAmzTargetEnum string

const (
    PutTargetsXAmzTargetEnumAwsEventsPutTargets PutTargetsXAmzTargetEnum = "AWSEvents.PutTargets"
)


type PutTargetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutTargetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutTargetsRequest struct {
    Headers PutTargetsHeaders 
    Request shared.PutTargetsRequest `request:"mediaType=application/json"`
    
}

type PutTargetsResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalException *interface{} 
    LimitExceededException *interface{} 
    ManagedRuleException *interface{} 
    PutTargetsResponse *shared.PutTargetsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

