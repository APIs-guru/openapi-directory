package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForCertificateXAmzTargetEnum string

const (
	ListTagsForCertificateXAmzTargetEnumCertificateManagerListTagsForCertificate ListTagsForCertificateXAmzTargetEnum = "CertificateManager.ListTagsForCertificate"
)

type ListTagsForCertificateHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsForCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTagsForCertificateRequest struct {
	Headers ListTagsForCertificateHeaders
	Request shared.ListTagsForCertificateRequest `request:"mediaType=application/json"`
}

type ListTagsForCertificateResponse struct {
	ContentType                    string
	InvalidArnException            *interface{}
	ListTagsForCertificateResponse *shared.ListTagsForCertificateResponse
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
