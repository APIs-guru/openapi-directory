package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePortalPathParams struct {
	PortalID string `pathParam:"style=simple,explode=false,name=portalId"`
}

type UpdatePortalHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdatePortalRequestBodyAlarms struct {
	AlarmRoleArn          *string `json:"alarmRoleArn"`
	NotificationLambdaArn *string `json:"notificationLambdaArn"`
}

type UpdatePortalRequestBodyPortalLogoImage struct {
	File *shared.ImageFile `json:"file"`
	ID   *string           `json:"id"`
}

type UpdatePortalRequestBody struct {
	Alarms                  *UpdatePortalRequestBodyAlarms          `json:"alarms"`
	ClientToken             *string                                 `json:"clientToken"`
	NotificationSenderEmail *string                                 `json:"notificationSenderEmail"`
	PortalContactEmail      string                                  `json:"portalContactEmail"`
	PortalDescription       *string                                 `json:"portalDescription"`
	PortalLogoImage         *UpdatePortalRequestBodyPortalLogoImage `json:"portalLogoImage"`
	PortalName              string                                  `json:"portalName"`
	RoleArn                 string                                  `json:"roleArn"`
}

type UpdatePortalRequest struct {
	PathParams UpdatePortalPathParams
	Headers    UpdatePortalHeaders
	Request    UpdatePortalRequestBody `request:"mediaType=application/json"`
}

type UpdatePortalResponse struct {
	ConflictingOperationException *interface{}
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdatePortalResponse          *shared.UpdatePortalResponse
}
