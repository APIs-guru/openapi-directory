package operations

import (
	"openapi/pkg/models/shared"
)

type PutPolicyXAmzTargetEnum string

const (
	PutPolicyXAmzTargetEnumAcmPrivateCaPutPolicy PutPolicyXAmzTargetEnum = "ACMPrivateCA.PutPolicy"
)

type PutPolicyHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutPolicyRequest struct {
	Headers PutPolicyHeaders
	Request shared.PutPolicyRequest `request:"mediaType=application/json"`
}

type PutPolicyResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidArnException             *interface{}
	InvalidPolicyException          *interface{}
	InvalidStateException           *interface{}
	LockoutPreventedException       *interface{}
	RequestFailedException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
