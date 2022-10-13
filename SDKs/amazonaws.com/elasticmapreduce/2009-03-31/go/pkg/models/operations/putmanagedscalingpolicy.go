package operations

import (
	"openapi/pkg/models/shared"
)

type PutManagedScalingPolicyXAmzTargetEnum string

const (
	PutManagedScalingPolicyXAmzTargetEnumElasticMapReducePutManagedScalingPolicy PutManagedScalingPolicyXAmzTargetEnum = "ElasticMapReduce.PutManagedScalingPolicy"
)

type PutManagedScalingPolicyHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutManagedScalingPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutManagedScalingPolicyRequest struct {
	Headers PutManagedScalingPolicyHeaders
	Request shared.PutManagedScalingPolicyInput `request:"mediaType=application/json"`
}

type PutManagedScalingPolicyResponse struct {
	ContentType                   string
	PutManagedScalingPolicyOutput map[string]interface{}
	StatusCode                    int64
}
