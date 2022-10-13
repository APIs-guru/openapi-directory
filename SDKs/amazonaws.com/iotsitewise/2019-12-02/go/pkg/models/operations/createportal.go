package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePortalHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreatePortalRequestBodyAlarms struct {
	AlarmRoleArn          *string `json:"alarmRoleArn"`
	NotificationLambdaArn *string `json:"notificationLambdaArn"`
}

type CreatePortalRequestBodyPortalAuthModeEnum string

const (
	CreatePortalRequestBodyPortalAuthModeEnumIam CreatePortalRequestBodyPortalAuthModeEnum = "IAM"
	CreatePortalRequestBodyPortalAuthModeEnumSso CreatePortalRequestBodyPortalAuthModeEnum = "SSO"
)

type CreatePortalRequestBodyPortalLogoImageFile struct {
	Data *string                   `json:"data"`
	Type *shared.ImageFileTypeEnum `json:"type"`
}

type CreatePortalRequestBody struct {
	Alarms                  *CreatePortalRequestBodyAlarms              `json:"alarms"`
	ClientToken             *string                                     `json:"clientToken"`
	NotificationSenderEmail *string                                     `json:"notificationSenderEmail"`
	PortalAuthMode          *CreatePortalRequestBodyPortalAuthModeEnum  `json:"portalAuthMode"`
	PortalContactEmail      string                                      `json:"portalContactEmail"`
	PortalDescription       *string                                     `json:"portalDescription"`
	PortalLogoImageFile     *CreatePortalRequestBodyPortalLogoImageFile `json:"portalLogoImageFile"`
	PortalName              string                                      `json:"portalName"`
	RoleArn                 string                                      `json:"roleArn"`
	Tags                    map[string]string                           `json:"tags"`
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
