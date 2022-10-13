package operations

import (
	"openapi/pkg/models/shared"
)

type PutAutoScalingPolicyXAmzTargetEnum string

const (
	PutAutoScalingPolicyXAmzTargetEnumElasticMapReducePutAutoScalingPolicy PutAutoScalingPolicyXAmzTargetEnum = "ElasticMapReduce.PutAutoScalingPolicy"
)

type PutAutoScalingPolicyHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAutoScalingPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutAutoScalingPolicyRequest struct {
	Headers PutAutoScalingPolicyHeaders
	Request shared.PutAutoScalingPolicyInput `request:"mediaType=application/json"`
}

type PutAutoScalingPolicyResponse struct {
	ContentType                string
	PutAutoScalingPolicyOutput *shared.PutAutoScalingPolicyOutput
	StatusCode                 int64
}
