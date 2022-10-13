package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTagsFromCertificateXAmzTargetEnum string

const (
	RemoveTagsFromCertificateXAmzTargetEnumCertificateManagerRemoveTagsFromCertificate RemoveTagsFromCertificateXAmzTargetEnum = "CertificateManager.RemoveTagsFromCertificate"
)

type RemoveTagsFromCertificateHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveTagsFromCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveTagsFromCertificateRequest struct {
	Headers RemoveTagsFromCertificateHeaders
	Request shared.RemoveTagsFromCertificateRequest `request:"mediaType=application/json"`
}

type RemoveTagsFromCertificateResponse struct {
	ContentType               string
	InvalidArnException       *interface{}
	InvalidParameterException *interface{}
	InvalidTagException       *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TagPolicyException        *interface{}
	ThrottlingException       *interface{}
}
