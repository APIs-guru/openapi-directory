package operations

import (
	"openapi/pkg/models/shared"
)

type BatchResetAlarmHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchResetAlarmRequestBody struct {
	ResetActionRequests []shared.ResetAlarmActionRequest `json:"resetActionRequests"`
}

type BatchResetAlarmRequest struct {
	Headers BatchResetAlarmHeaders
	Request BatchResetAlarmRequestBody `request:"mediaType=application/json"`
}

type BatchResetAlarmResponse struct {
	BatchResetAlarmResponse     *shared.BatchResetAlarmResponse
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
