package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAutoTerminationPolicyXAmzTargetEnum string

const (
	RemoveAutoTerminationPolicyXAmzTargetEnumElasticMapReduceRemoveAutoTerminationPolicy RemoveAutoTerminationPolicyXAmzTargetEnum = "ElasticMapReduce.RemoveAutoTerminationPolicy"
)

type RemoveAutoTerminationPolicyHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveAutoTerminationPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RemoveAutoTerminationPolicyRequest struct {
	Headers RemoveAutoTerminationPolicyHeaders
	Request shared.RemoveAutoTerminationPolicyInput `request:"mediaType=application/json"`
}

type RemoveAutoTerminationPolicyResponse struct {
	ContentType                       string
	RemoveAutoTerminationPolicyOutput map[string]interface{}
	StatusCode                        int64
}
