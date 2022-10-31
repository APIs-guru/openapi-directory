package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePortalHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreatePortalRequestBodyAlarms struct {
	AlarmRoleArn          *string `json:"alarmRoleArn,omitempty"`
	NotificationLambdaArn *string `json:"notificationLambdaArn,omitempty"`
}

type CreatePortalRequestBodyPortalAuthModeEnum string

const (
	CreatePortalRequestBodyPortalAuthModeEnumIam CreatePortalRequestBodyPortalAuthModeEnum = "IAM"
	CreatePortalRequestBodyPortalAuthModeEnumSso CreatePortalRequestBodyPortalAuthModeEnum = "SSO"
)

type CreatePortalRequestBodyPortalLogoImageFile struct {
	Data *string                   `json:"data,omitempty"`
	Type *shared.ImageFileTypeEnum `json:"type,omitempty"`
}

type CreatePortalRequestBody struct {
	Alarms                  *CreatePortalRequestBodyAlarms              `json:"alarms,omitempty"`
	ClientToken             *string                                     `json:"clientToken,omitempty"`
	NotificationSenderEmail *string                                     `json:"notificationSenderEmail,omitempty"`
	PortalAuthMode          *CreatePortalRequestBodyPortalAuthModeEnum  `json:"portalAuthMode,omitempty"`
	PortalContactEmail      string                                      `json:"portalContactEmail"`
	PortalDescription       *string                                     `json:"portalDescription,omitempty"`
	PortalLogoImageFile     *CreatePortalRequestBodyPortalLogoImageFile `json:"portalLogoImageFile,omitempty"`
	PortalName              string                                      `json:"portalName"`
	RoleArn                 string                                      `json:"roleArn"`
	Tags                    map[string]string                           `json:"tags,omitempty"`
}

type CreatePortalRequest struct {
	Headers CreatePortalHeaders
	Request CreatePortalRequestBody `request:"mediaType=application/json"`
}

type CreatePortalResponse struct {
	ContentType               string
	CreatePortalResponse      *shared.CreatePortalResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
