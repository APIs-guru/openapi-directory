package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCertificateAuthorityAuditReportXAmzTargetEnum string

const (
	CreateCertificateAuthorityAuditReportXAmzTargetEnumAcmPrivateCaCreateCertificateAuthorityAuditReport CreateCertificateAuthorityAuditReportXAmzTargetEnum = "ACMPrivateCA.CreateCertificateAuthorityAuditReport"
)

type CreateCertificateAuthorityAuditReportHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCertificateAuthorityAuditReportXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateCertificateAuthorityAuditReportRequest struct {
	Headers CreateCertificateAuthorityAuditReportHeaders
	Request shared.CreateCertificateAuthorityAuditReportRequest `request:"mediaType=application/json"`
}

type CreateCertificateAuthorityAuditReportResponse struct {
	ContentType                                   string
	CreateCertificateAuthorityAuditReportResponse *shared.CreateCertificateAuthorityAuditReportResponse
	InvalidArgsException                          *interface{}
	InvalidArnException                           *interface{}
	InvalidStateException                         *interface{}
	RequestFailedException                        *interface{}
	RequestInProgressException                    *interface{}
	ResourceNotFoundException                     *interface{}
	StatusCode                                    int64
}
