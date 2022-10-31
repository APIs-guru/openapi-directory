package operations

import (
"openapi/pkg/models/shared")


type RemoveAutoScalingPolicyXAmzTargetEnum string

const (
    RemoveAutoScalingPolicyXAmzTargetEnumElasticMapReduceRemoveAutoScalingPolicy RemoveAutoScalingPolicyXAmzTargetEnum = "ElasticMapReduce.RemoveAutoScalingPolicy"
)


type RemoveAutoScalingPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RemoveAutoScalingPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RemoveAutoScalingPolicyRequest struct {
    Headers RemoveAutoScalingPolicyHeaders 
    Request shared.RemoveAutoScalingPolicyInput `request:"mediaType=application/json"`
    
}

type RemoveAutoScalingPolicyResponse struct {
    ContentType string 
    RemoveAutoScalingPolicyOutput map[string]interface{} 
    StatusCode int64 
    
}

