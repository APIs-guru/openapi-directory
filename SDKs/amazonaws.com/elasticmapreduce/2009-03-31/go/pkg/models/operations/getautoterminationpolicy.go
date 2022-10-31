package operations

import (
"openapi/pkg/models/shared")


type GetAutoTerminationPolicyXAmzTargetEnum string

const (
    GetAutoTerminationPolicyXAmzTargetEnumElasticMapReduceGetAutoTerminationPolicy GetAutoTerminationPolicyXAmzTargetEnum = "ElasticMapReduce.GetAutoTerminationPolicy"
)


type GetAutoTerminationPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetAutoTerminationPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetAutoTerminationPolicyRequest struct {
    Headers GetAutoTerminationPolicyHeaders 
    Request shared.GetAutoTerminationPolicyInput `request:"mediaType=application/json"`
    
}

type GetAutoTerminationPolicyResponse struct {
    ContentType string 
    GetAutoTerminationPolicyOutput *shared.GetAutoTerminationPolicyOutput 
    StatusCode int64 
    
}

