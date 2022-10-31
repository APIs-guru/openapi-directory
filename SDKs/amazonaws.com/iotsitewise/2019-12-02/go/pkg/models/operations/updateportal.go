package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePortalPathParams struct {
	PortalID string `pathParam:"style=simple,explode=false,name=portalId"`
}

type UpdatePortalHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdatePortalRequestBodyAlarms struct {
	AlarmRoleArn          *string `json:"alarmRoleArn,omitempty"`
	NotificationLambdaArn *string `json:"notificationLambdaArn,omitempty"`
}

type UpdatePortalRequestBodyPortalLogoImage struct {
	File *shared.ImageFile `json:"file,omitempty"`
	ID   *string           `json:"id,omitempty"`
}

type UpdatePortalRequestBody struct {
	Alarms                  *UpdatePortalRequestBodyAlarms          `json:"alarms,omitempty"`
	ClientToken             *string                                 `json:"clientToken,omitempty"`
	NotificationSenderEmail *string                                 `json:"notificationSenderEmail,omitempty"`
	PortalContactEmail      string                                  `json:"portalContactEmail"`
	PortalDescription       *string                                 `json:"portalDescription,omitempty"`
	PortalLogoImage         *UpdatePortalRequestBodyPortalLogoImage `json:"portalLogoImage,omitempty"`
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
