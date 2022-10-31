package operations

import (
	"openapi/pkg/models/shared"
)

type PutAutoScalingPolicyXAmzTargetEnum string

const (
	PutAutoScalingPolicyXAmzTargetEnumElasticMapReducePutAutoScalingPolicy PutAutoScalingPolicyXAmzTargetEnum = "ElasticMapReduce.PutAutoScalingPolicy"
)

type PutAutoScalingPolicyHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAutoScalingPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
