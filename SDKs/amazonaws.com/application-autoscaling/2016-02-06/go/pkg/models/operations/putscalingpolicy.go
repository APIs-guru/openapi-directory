package operations

import (
"openapi/pkg/models/shared")


type PutScalingPolicyXAmzTargetEnum string

const (
    PutScalingPolicyXAmzTargetEnumAnyScaleFrontendServicePutScalingPolicy PutScalingPolicyXAmzTargetEnum = "AnyScaleFrontendService.PutScalingPolicy"
)


type PutScalingPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutScalingPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutScalingPolicyRequest struct {
    Headers PutScalingPolicyHeaders 
    Request shared.PutScalingPolicyRequest `request:"mediaType=application/json"`
    
}

type PutScalingPolicyResponse struct {
    ConcurrentUpdateException *interface{} 
    ContentType string 
    FailedResourceAccessException *interface{} 
    InternalServiceException *interface{} 
    LimitExceededException *interface{} 
    ObjectNotFoundException *interface{} 
    PutScalingPolicyResponse *shared.PutScalingPolicyResponse 
    StatusCode int64 
    ValidationException *interface{} 
    
}

