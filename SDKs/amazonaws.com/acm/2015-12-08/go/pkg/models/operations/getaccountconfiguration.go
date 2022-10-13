package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountConfigurationXAmzTargetEnum string

const (
	GetAccountConfigurationXAmzTargetEnumCertificateManagerGetAccountConfiguration GetAccountConfigurationXAmzTargetEnum = "CertificateManager.GetAccountConfiguration"
)

type GetAccountConfigurationHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAccountConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAccountConfigurationRequest struct {
	Headers GetAccountConfigurationHeaders
}

type GetAccountConfigurationResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	GetAccountConfigurationResponse *shared.GetAccountConfigurationResponse
	StatusCode                      int64
	ThrottlingException             *interface{}
}
