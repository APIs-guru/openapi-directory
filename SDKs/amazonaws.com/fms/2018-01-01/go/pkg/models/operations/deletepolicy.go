package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePolicyXAmzTargetEnum string

const (
	DeletePolicyXAmzTargetEnumAwsfms20180101DeletePolicy DeletePolicyXAmzTargetEnum = "AWSFMS_20180101.DeletePolicy"
)

type DeletePolicyHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePolicyRequest struct {
	Headers DeletePolicyHeaders
	Request shared.DeletePolicyRequest `request:"mediaType=application/json"`
}

type DeletePolicyResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidInputException     *interface{}
	InvalidOperationException *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
