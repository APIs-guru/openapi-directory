package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCertificateOptionsXAmzTargetEnum string

const (
	UpdateCertificateOptionsXAmzTargetEnumCertificateManagerUpdateCertificateOptions UpdateCertificateOptionsXAmzTargetEnum = "CertificateManager.UpdateCertificateOptions"
)

type UpdateCertificateOptionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCertificateOptionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateCertificateOptionsRequest struct {
	Headers UpdateCertificateOptionsHeaders
	Request shared.UpdateCertificateOptionsRequest `request:"mediaType=application/json"`
}

type UpdateCertificateOptionsResponse struct {
	ContentType               string
	InvalidArnException       *interface{}
	InvalidStateException     *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
