package operations

import (
"openapi/pkg/models/shared")


type DeleteResourcePolicyXAmzTargetEnum string

const (
    DeleteResourcePolicyXAmzTargetEnumAwsGlueDeleteResourcePolicy DeleteResourcePolicyXAmzTargetEnum = "AWSGlue.DeleteResourcePolicy"
)


type DeleteResourcePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteResourcePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteResourcePolicyRequest struct {
    Headers DeleteResourcePolicyHeaders 
    Request shared.DeleteResourcePolicyRequest `request:"mediaType=application/json"`
    
}

type DeleteResourcePolicyResponse struct {
    ConditionCheckFailureException *interface{} 
    ContentType string 
    DeleteResourcePolicyResponse map[string]interface{} 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

