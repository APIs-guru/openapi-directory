package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAlarmModelPathParams struct {
	AlarmModelName string `pathParam:"style=simple,explode=false,name=alarmModelName"`
}

type UpdateAlarmModelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAlarmModelRequestBodyAlarmCapabilities struct {
	AcknowledgeFlow             *shared.AcknowledgeFlow             `json:"acknowledgeFlow"`
	InitializationConfiguration *shared.InitializationConfiguration `json:"initializationConfiguration"`
}

type UpdateAlarmModelRequestBodyAlarmEventActions struct {
	AlarmActions []shared.AlarmAction `json:"alarmActions"`
}

type UpdateAlarmModelRequestBodyAlarmNotification struct {
	NotificationActions []shared.NotificationAction `json:"notificationActions"`
}

type UpdateAlarmModelRequestBodyAlarmRule struct {
	SimpleRule *shared.SimpleRule `json:"simpleRule"`
}

type UpdateAlarmModelRequestBody struct {
	AlarmCapabilities     *UpdateAlarmModelRequestBodyAlarmCapabilities `json:"alarmCapabilities"`
	AlarmEventActions     *UpdateAlarmModelRequestBodyAlarmEventActions `json:"alarmEventActions"`
	AlarmModelDescription *string                                       `json:"alarmModelDescription"`
	AlarmNotification     *UpdateAlarmModelRequestBodyAlarmNotification `json:"alarmNotification"`
	AlarmRule             UpdateAlarmModelRequestBodyAlarmRule          `json:"alarmRule"`
	RoleArn               string                                        `json:"roleArn"`
	Severity              *int64                                        `json:"severity"`
}

type UpdateAlarmModelRequest struct {
	PathParams UpdateAlarmModelPathParams
	Headers    UpdateAlarmModelHeaders
	Request    UpdateAlarmModelRequestBody `request:"mediaType=application/json"`
}

type UpdateAlarmModelResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceInUseException      *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UpdateAlarmModelResponse    *shared.UpdateAlarmModelResponse
}
