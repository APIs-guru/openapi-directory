package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAutoScalingPolicyXAmzTargetEnum string

const (
	RemoveAutoScalingPolicyXAmzTargetEnumElasticMapReduceRemoveAutoScalingPolicy RemoveAutoScalingPolicyXAmzTargetEnum = "ElasticMapReduce.RemoveAutoScalingPolicy"
)

type RemoveAutoScalingPolicyHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveAutoScalingPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveAutoScalingPolicyRequest struct {
	Headers RemoveAutoScalingPolicyHeaders
	Request shared.RemoveAutoScalingPolicyInput `request:"mediaType=application/json"`
}

type RemoveAutoScalingPolicyResponse struct {
	ContentType                   string
	RemoveAutoScalingPolicyOutput map[string]interface{}
	StatusCode                    int64
}
