package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountAuditConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAccountAuditConfigurationRequestBody struct {
	AuditCheckConfigurations              map[string]shared.AuditCheckConfiguration `json:"auditCheckConfigurations"`
	AuditNotificationTargetConfigurations map[string]shared.AuditNotificationTarget `json:"auditNotificationTargetConfigurations"`
	RoleArn                               *string                                   `json:"roleArn"`
}

type UpdateAccountAuditConfigurationRequest struct {
	Headers UpdateAccountAuditConfigurationHeaders
	Request UpdateAccountAuditConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateAccountAuditConfigurationResponse struct {
	ContentType                             string
	InternalFailureException                *interface{}
	InvalidRequestException                 *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
	UpdateAccountAuditConfigurationResponse map[string]interface{}
}
