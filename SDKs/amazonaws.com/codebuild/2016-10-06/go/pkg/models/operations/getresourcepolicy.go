package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcePolicyXAmzTargetEnum string

const (
	GetResourcePolicyXAmzTargetEnumCodeBuild20161006GetResourcePolicy GetResourcePolicyXAmzTargetEnum = "CodeBuild_20161006.GetResourcePolicy"
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
	Request shared.GetResourcePolicyInput `request:"mediaType=application/json"`
}

type GetResourcePolicyResponse struct {
	ContentType               string
	GetResourcePolicyOutput   *shared.GetResourcePolicyOutput
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
