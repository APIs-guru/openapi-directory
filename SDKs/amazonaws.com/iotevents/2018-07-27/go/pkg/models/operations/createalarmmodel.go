package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAlarmModelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateAlarmModelRequestBodyAlarmCapabilities
// Contains the configuration information of alarm state changes.
type CreateAlarmModelRequestBodyAlarmCapabilities struct {
	AcknowledgeFlow             *shared.AcknowledgeFlow             `json:"acknowledgeFlow,omitempty"`
	InitializationConfiguration *shared.InitializationConfiguration `json:"initializationConfiguration,omitempty"`
}

// CreateAlarmModelRequestBodyAlarmEventActions
// Contains information about one or more alarm actions.
type CreateAlarmModelRequestBodyAlarmEventActions struct {
	AlarmActions []shared.AlarmAction `json:"alarmActions,omitempty"`
}

// CreateAlarmModelRequestBodyAlarmNotification
// Contains information about one or more notification actions.
type CreateAlarmModelRequestBodyAlarmNotification struct {
	NotificationActions []shared.NotificationAction `json:"notificationActions,omitempty"`
}

// CreateAlarmModelRequestBodyAlarmRule
// Defines when your alarm is invoked.
type CreateAlarmModelRequestBodyAlarmRule struct {
	SimpleRule *shared.SimpleRule `json:"simpleRule,omitempty"`
}

type CreateAlarmModelRequestBody struct {
	AlarmCapabilities     *CreateAlarmModelRequestBodyAlarmCapabilities `json:"alarmCapabilities,omitempty"`
	AlarmEventActions     *CreateAlarmModelRequestBodyAlarmEventActions `json:"alarmEventActions,omitempty"`
	AlarmModelDescription *string                                       `json:"alarmModelDescription,omitempty"`
	AlarmModelName        string                                        `json:"alarmModelName"`
	AlarmNotification     *CreateAlarmModelRequestBodyAlarmNotification `json:"alarmNotification,omitempty"`
	AlarmRule             CreateAlarmModelRequestBodyAlarmRule          `json:"alarmRule"`
	Key                   *string                                       `json:"key,omitempty"`
	RoleArn               string                                        `json:"roleArn"`
	Severity              *int64                                        `json:"severity,omitempty"`
	Tags                  []shared.Tag                                  `json:"tags,omitempty"`
}

type CreateAlarmModelRequest struct {
	Headers CreateAlarmModelHeaders
	Request CreateAlarmModelRequestBody `request:"mediaType=application/json"`
}

type CreateAlarmModelResponse struct {
	ContentType                    string
	CreateAlarmModelResponse       *shared.CreateAlarmModelResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceInUseException         *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
