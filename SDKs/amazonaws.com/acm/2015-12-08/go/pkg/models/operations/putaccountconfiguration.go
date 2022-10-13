package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountConfigurationXAmzTargetEnum string

const (
	PutAccountConfigurationXAmzTargetEnumCertificateManagerPutAccountConfiguration PutAccountConfigurationXAmzTargetEnum = "CertificateManager.PutAccountConfiguration"
)

type PutAccountConfigurationHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAccountConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutAccountConfigurationRequest struct {
	Headers PutAccountConfigurationHeaders
	Request shared.PutAccountConfigurationRequest `request:"mediaType=application/json"`
}

type PutAccountConfigurationResponse struct {
	AccessDeniedException *interface{}
	ConflictException     *interface{}
	ContentType           string
	StatusCode            int64
	ThrottlingException   *interface{}
	ValidationException   *interface{}
}
