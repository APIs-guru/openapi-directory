package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountConfigurationXAmzTargetEnum string

const (
	PutAccountConfigurationXAmzTargetEnumCertificateManagerPutAccountConfiguration PutAccountConfigurationXAmzTargetEnum = "CertificateManager.PutAccountConfiguration"
)

type PutAccountConfigurationHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutAccountConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
