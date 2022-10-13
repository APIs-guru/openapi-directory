package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedScalingPolicyXAmzTargetEnum string

const (
	GetManagedScalingPolicyXAmzTargetEnumElasticMapReduceGetManagedScalingPolicy GetManagedScalingPolicyXAmzTargetEnum = "ElasticMapReduce.GetManagedScalingPolicy"
)

type GetManagedScalingPolicyHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetManagedScalingPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetManagedScalingPolicyRequest struct {
	Headers GetManagedScalingPolicyHeaders
	Request shared.GetManagedScalingPolicyInput `request:"mediaType=application/json"`
}

type GetManagedScalingPolicyResponse struct {
	ContentType                   string
	GetManagedScalingPolicyOutput *shared.GetManagedScalingPolicyOutput
	StatusCode                    int64
}
