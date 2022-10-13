package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type StartDetectMitigationActionsTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type StartDetectMitigationActionsTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartDetectMitigationActionsTaskRequestBodyTarget struct {
	BehaviorName        *string  `json:"behaviorName"`
	SecurityProfileName *string  `json:"securityProfileName"`
	ViolationIds        []string `json:"violationIds"`
}

type StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange struct {
	EndTime   *time.Time `json:"endTime"`
	StartTime *time.Time `json:"startTime"`
}

type StartDetectMitigationActionsTaskRequestBody struct {
	Actions                       []string                                                                  `json:"actions"`
	ClientRequestToken            string                                                                    `json:"clientRequestToken"`
	IncludeOnlyActiveViolations   *bool                                                                     `json:"includeOnlyActiveViolations"`
	IncludeSuppressedAlerts       *bool                                                                     `json:"includeSuppressedAlerts"`
	Target                        StartDetectMitigationActionsTaskRequestBodyTarget                         `json:"target"`
	ViolationEventOccurrenceRange *StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange `json:"violationEventOccurrenceRange"`
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
