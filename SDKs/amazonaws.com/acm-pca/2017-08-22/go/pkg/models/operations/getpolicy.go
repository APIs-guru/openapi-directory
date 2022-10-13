package operations

import (
	"openapi/pkg/models/shared"
)

type GetPolicyXAmzTargetEnum string

const (
	GetPolicyXAmzTargetEnumAcmPrivateCaGetPolicy GetPolicyXAmzTargetEnum = "ACMPrivateCA.GetPolicy"
)

type GetPolicyHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPolicyRequest struct {
	Headers GetPolicyHeaders
	Request shared.GetPolicyRequest `request:"mediaType=application/json"`
}

type GetPolicyResponse struct {
	ContentType               string
	GetPolicyResponse         *shared.GetPolicyResponse
	InvalidArnException       *interface{}
	InvalidStateException     *interface{}
	RequestFailedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
