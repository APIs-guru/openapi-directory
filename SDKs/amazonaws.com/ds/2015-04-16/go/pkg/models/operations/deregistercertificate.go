package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterCertificateXAmzTargetEnum string

const (
	DeregisterCertificateXAmzTargetEnumDirectoryService20150416DeregisterCertificate DeregisterCertificateXAmzTargetEnum = "DirectoryService_20150416.DeregisterCertificate"
)

type DeregisterCertificateHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterCertificateRequest struct {
	Headers DeregisterCertificateHeaders
	Request shared.DeregisterCertificateRequest `request:"mediaType=application/json"`
}

type DeregisterCertificateResponse struct {
	CertificateDoesNotExistException *interface{}
	CertificateInUseException        *interface{}
	ClientException                  *interface{}
	ContentType                      string
	DeregisterCertificateResult      map[string]interface{}
	DirectoryDoesNotExistException   *interface{}
	DirectoryUnavailableException    *interface{}
	InvalidParameterException        *interface{}
	ServiceException                 *interface{}
	StatusCode                       int64
	UnsupportedOperationException    *interface{}
}
