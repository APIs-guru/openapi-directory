package operations

import (
	"openapi/pkg/models/shared"
)

type PutResourcePolicyXAmzTargetEnum string

const (
	PutResourcePolicyXAmzTargetEnumAwsGluePutResourcePolicy PutResourcePolicyXAmzTargetEnum = "AWSGlue.PutResourcePolicy"
)

type PutResourcePolicyHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutResourcePolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutResourcePolicyRequest struct {
	Headers PutResourcePolicyHeaders
	Request shared.PutResourcePolicyRequest `request:"mediaType=application/json"`
}

type PutResourcePolicyResponse struct {
	ConditionCheckFailureException *interface{}
	ContentType                    string
	EntityNotFoundException        *interface{}
	InternalServiceException       *interface{}
	InvalidInputException          *interface{}
	OperationTimeoutException      *interface{}
	PutResourcePolicyResponse      *shared.PutResourcePolicyResponse
	StatusCode                     int64
}
