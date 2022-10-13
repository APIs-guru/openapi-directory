package operations

import (
	"openapi/pkg/models/shared"
)

type GetAutoTerminationPolicyXAmzTargetEnum string

const (
	GetAutoTerminationPolicyXAmzTargetEnumElasticMapReduceGetAutoTerminationPolicy GetAutoTerminationPolicyXAmzTargetEnum = "ElasticMapReduce.GetAutoTerminationPolicy"
)

type GetAutoTerminationPolicyHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAutoTerminationPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAutoTerminationPolicyRequest struct {
	Headers GetAutoTerminationPolicyHeaders
	Request shared.GetAutoTerminationPolicyInput `request:"mediaType=application/json"`
}

type GetAutoTerminationPolicyResponse struct {
	ContentType                    string
	GetAutoTerminationPolicyOutput *shared.GetAutoTerminationPolicyOutput
	StatusCode                     int64
}
