package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAlarmModelPathParams struct {
	AlarmModelName string `pathParam:"style=simple,explode=false,name=alarmModelName"`
}

type UpdateAlarmModelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateAlarmModelRequestBodyAlarmCapabilities
// Contains the configuration information of alarm state changes.
type UpdateAlarmModelRequestBodyAlarmCapabilities struct {
	AcknowledgeFlow             *shared.AcknowledgeFlow             `json:"acknowledgeFlow,omitempty"`
	InitializationConfiguration *shared.InitializationConfiguration `json:"initializationConfiguration,omitempty"`
}

// UpdateAlarmModelRequestBodyAlarmEventActions
// Contains information about one or more alarm actions.
type UpdateAlarmModelRequestBodyAlarmEventActions struct {
	AlarmActions []shared.AlarmAction `json:"alarmActions,omitempty"`
}

// UpdateAlarmModelRequestBodyAlarmNotification
// Contains information about one or more notification actions.
type UpdateAlarmModelRequestBodyAlarmNotification struct {
	NotificationActions []shared.NotificationAction `json:"notificationActions,omitempty"`
}

// UpdateAlarmModelRequestBodyAlarmRule
// Defines when your alarm is invoked.
type UpdateAlarmModelRequestBodyAlarmRule struct {
	SimpleRule *shared.SimpleRule `json:"simpleRule,omitempty"`
}

type UpdateAlarmModelRequestBody struct {
	AlarmCapabilities     *UpdateAlarmModelRequestBodyAlarmCapabilities `json:"alarmCapabilities,omitempty"`
	AlarmEventActions     *UpdateAlarmModelRequestBodyAlarmEventActions `json:"alarmEventActions,omitempty"`
	AlarmModelDescription *string                                       `json:"alarmModelDescription,omitempty"`
	AlarmNotification     *UpdateAlarmModelRequestBodyAlarmNotification `json:"alarmNotification,omitempty"`
	AlarmRule             UpdateAlarmModelRequestBodyAlarmRule          `json:"alarmRule"`
	RoleArn               string                                        `json:"roleArn"`
	Severity              *int64                                        `json:"severity,omitempty"`
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
