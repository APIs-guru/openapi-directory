package operations

import (
	"openapi/pkg/models/shared"
)

type BatchSnoozeAlarmHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchSnoozeAlarmRequestBody struct {
	SnoozeActionRequests []shared.SnoozeAlarmActionRequest `json:"snoozeActionRequests"`
}

type BatchSnoozeAlarmRequest struct {
	Headers BatchSnoozeAlarmHeaders
	Request BatchSnoozeAlarmRequestBody `request:"mediaType=application/json"`
}

type BatchSnoozeAlarmResponse struct {
	BatchSnoozeAlarmResponse    *shared.BatchSnoozeAlarmResponse
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
