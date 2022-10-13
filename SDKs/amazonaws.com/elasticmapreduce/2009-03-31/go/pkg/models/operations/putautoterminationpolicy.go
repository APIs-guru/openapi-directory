package operations

import (
	"openapi/pkg/models/shared"
)

type PutAutoTerminationPolicyXAmzTargetEnum string

const (
	PutAutoTerminationPolicyXAmzTargetEnumElasticMapReducePutAutoTerminationPolicy PutAutoTerminationPolicyXAmzTargetEnum = "ElasticMapReduce.PutAutoTerminationPolicy"
)

type PutAutoTerminationPolicyHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAutoTerminationPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutAutoTerminationPolicyRequest struct {
	Headers PutAutoTerminationPolicyHeaders
	Request shared.PutAutoTerminationPolicyInput `request:"mediaType=application/json"`
}

type PutAutoTerminationPolicyResponse struct {
	ContentType                    string
	PutAutoTerminationPolicyOutput map[string]interface{}
	StatusCode                     int64
}
