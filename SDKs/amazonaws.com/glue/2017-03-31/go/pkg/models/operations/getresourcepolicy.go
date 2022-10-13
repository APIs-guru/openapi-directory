package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcePolicyXAmzTargetEnum string

const (
	GetResourcePolicyXAmzTargetEnumAwsGlueGetResourcePolicy GetResourcePolicyXAmzTargetEnum = "AWSGlue.GetResourcePolicy"
)

type GetResourcePolicyHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResourcePolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetResourcePolicyRequest struct {
	Headers GetResourcePolicyHeaders
	Request shared.GetResourcePolicyRequest `request:"mediaType=application/json"`
}

type GetResourcePolicyResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetResourcePolicyResponse *shared.GetResourcePolicyResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
