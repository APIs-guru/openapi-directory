package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveManagedScalingPolicyXAmzTargetEnum string

const (
	RemoveManagedScalingPolicyXAmzTargetEnumElasticMapReduceRemoveManagedScalingPolicy RemoveManagedScalingPolicyXAmzTargetEnum = "ElasticMapReduce.RemoveManagedScalingPolicy"
)

type RemoveManagedScalingPolicyHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveManagedScalingPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveManagedScalingPolicyRequest struct {
	Headers RemoveManagedScalingPolicyHeaders
	Request shared.RemoveManagedScalingPolicyInput `request:"mediaType=application/json"`
}

type RemoveManagedScalingPolicyResponse struct {
	ContentType                      string
	RemoveManagedScalingPolicyOutput map[string]interface{}
	StatusCode                       int64
}
