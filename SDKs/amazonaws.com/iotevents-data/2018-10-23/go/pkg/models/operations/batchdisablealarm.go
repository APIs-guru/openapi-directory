package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDisableAlarmHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchDisableAlarmRequestBody struct {
	DisableActionRequests []shared.DisableAlarmActionRequest `json:"disableActionRequests"`
}

type BatchDisableAlarmRequest struct {
	Headers BatchDisableAlarmHeaders
	Request BatchDisableAlarmRequestBody `request:"mediaType=application/json"`
}

type BatchDisableAlarmResponse struct {
	BatchDisableAlarmResponse   *shared.BatchDisableAlarmResponse
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
