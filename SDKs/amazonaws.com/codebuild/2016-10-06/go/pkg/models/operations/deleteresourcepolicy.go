package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourcePolicyXAmzTargetEnum string

const (
	DeleteResourcePolicyXAmzTargetEnumCodeBuild20161006DeleteResourcePolicy DeleteResourcePolicyXAmzTargetEnum = "CodeBuild_20161006.DeleteResourcePolicy"
)

type DeleteResourcePolicyHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResourcePolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteResourcePolicyRequest struct {
	Headers DeleteResourcePolicyHeaders
	Request shared.DeleteResourcePolicyInput `request:"mediaType=application/json"`
}

type DeleteResourcePolicyResponse struct {
	ContentType                string
	DeleteResourcePolicyOutput map[string]interface{}
	InvalidInputException      *interface{}
	StatusCode                 int64
}
