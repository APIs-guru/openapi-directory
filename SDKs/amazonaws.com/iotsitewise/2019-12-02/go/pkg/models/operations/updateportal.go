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

// UpdatePortalRequestBodyAlarms
// Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
type UpdatePortalRequestBodyAlarms struct {
	AlarmRoleArn          *string `json:"alarmRoleArn,omitempty"`
	NotificationLambdaArn *string `json:"notificationLambdaArn,omitempty"`
}

// UpdatePortalRequestBodyPortalLogoImage
// <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>
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
