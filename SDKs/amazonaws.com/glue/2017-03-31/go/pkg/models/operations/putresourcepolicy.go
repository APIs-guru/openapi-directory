package operations

import (
"openapi/pkg/models/shared")


type PutResourcePolicyXAmzTargetEnum string

const (
    PutResourcePolicyXAmzTargetEnumAwsGluePutResourcePolicy PutResourcePolicyXAmzTargetEnum = "AWSGlue.PutResourcePolicy"
)


type PutResourcePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutResourcePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutResourcePolicyRequest struct {
    Headers PutResourcePolicyHeaders 
    Request shared.PutResourcePolicyRequest `request:"mediaType=application/json"`
    
}

type PutResourcePolicyResponse struct {
    ConditionCheckFailureException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    PutResourcePolicyResponse *shared.PutResourcePolicyResponse 
    StatusCode int64 
    
}

