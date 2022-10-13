package operations

import (
	"openapi/pkg/models/shared"
)

type ImportCertificateXAmzTargetEnum string

const (
	ImportCertificateXAmzTargetEnumAmazonDmSv20160101ImportCertificate ImportCertificateXAmzTargetEnum = "AmazonDMSv20160101.ImportCertificate"
)

type ImportCertificateHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ImportCertificateRequest struct {
	Headers ImportCertificateHeaders
	Request shared.ImportCertificateMessage `request:"mediaType=application/json"`
}

type ImportCertificateResponse struct {
	ContentType                string
	ImportCertificateResponse  *shared.ImportCertificateResponse
	InvalidCertificateFault    *interface{}
	ResourceAlreadyExistsFault *interface{}
	ResourceQuotaExceededFault *interface{}
	StatusCode                 int64
}
