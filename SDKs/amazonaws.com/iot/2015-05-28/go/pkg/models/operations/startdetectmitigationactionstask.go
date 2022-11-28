package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type StartDetectMitigationActionsTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type StartDetectMitigationActionsTaskHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// StartDetectMitigationActionsTaskRequestBodyTarget
//
//	The target of a mitigation action task.
type StartDetectMitigationActionsTaskRequestBodyTarget struct {
	BehaviorName        *string  `json:"behaviorName,omitempty"`
	SecurityProfileName *string  `json:"securityProfileName,omitempty"`
	ViolationIds        []string `json:"violationIds,omitempty"`
}

// StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange
//
//	Specifies the time period of which violation events occurred between.
type StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange struct {
	EndTime   *time.Time `json:"endTime,omitempty"`
	StartTime *time.Time `json:"startTime,omitempty"`
}

type StartDetectMitigationActionsTaskRequestBody struct {
	Actions                       []string                                                                  `json:"actions"`
	ClientRequestToken            string                                                                    `json:"clientRequestToken"`
	IncludeOnlyActiveViolations   *bool                                                                     `json:"includeOnlyActiveViolations,omitempty"`
	IncludeSuppressedAlerts       *bool                                                                     `json:"includeSuppressedAlerts,omitempty"`
	Target                        StartDetectMitigationActionsTaskRequestBodyTarget                         `json:"target"`
	ViolationEventOccurrenceRange *StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange `json:"violationEventOccurrenceRange,omitempty"`
}

type StartDetectMitigationActionsTaskRequest struct {
	PathParams StartDetectMitigationActionsTaskPathParams
	Headers    StartDetectMitigationActionsTaskHeaders
	Request    StartDetectMitigationActionsTaskRequestBody `request:"mediaType=application/json"`
}

type StartDetectMitigationActionsTaskResponse struct {
	ContentType                              string
	InternalFailureException                 *interface{}
	InvalidRequestException                  *interface{}
	LimitExceededException                   *interface{}
	StartDetectMitigationActionsTaskResponse *shared.StartDetectMitigationActionsTaskResponse
	StatusCode                               int64
	TaskAlreadyExistsException               *interface{}
	ThrottlingException                      *interface{}
}
