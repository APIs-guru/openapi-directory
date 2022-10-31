package operations

import (
"openapi/pkg/models/shared")


type RemoveManagedScalingPolicyXAmzTargetEnum string

const (
    RemoveManagedScalingPolicyXAmzTargetEnumElasticMapReduceRemoveManagedScalingPolicy RemoveManagedScalingPolicyXAmzTargetEnum = "ElasticMapReduce.RemoveManagedScalingPolicy"
)


type RemoveManagedScalingPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RemoveManagedScalingPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RemoveManagedScalingPolicyRequest struct {
    Headers RemoveManagedScalingPolicyHeaders 
    Request shared.RemoveManagedScalingPolicyInput `request:"mediaType=application/json"`
    
}

type RemoveManagedScalingPolicyResponse struct {
    ContentType string 
    RemoveManagedScalingPolicyOutput map[string]interface{} 
    StatusCode int64 
    
}

