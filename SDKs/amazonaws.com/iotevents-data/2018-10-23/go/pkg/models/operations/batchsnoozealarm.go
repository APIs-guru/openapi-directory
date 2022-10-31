package operations

import (
	"openapi/pkg/models/shared"
)

type BatchSnoozeAlarmHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
