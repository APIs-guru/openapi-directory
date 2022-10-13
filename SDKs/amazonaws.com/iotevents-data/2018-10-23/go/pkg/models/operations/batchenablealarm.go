package operations

import (
	"openapi/pkg/models/shared"
)

type BatchEnableAlarmHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchEnableAlarmRequestBody struct {
	EnableActionRequests []shared.EnableAlarmActionRequest `json:"enableActionRequests"`
}

type BatchEnableAlarmRequest struct {
	Headers BatchEnableAlarmHeaders
	Request BatchEnableAlarmRequestBody `request:"mediaType=application/json"`
}

type BatchEnableAlarmResponse struct {
	BatchEnableAlarmResponse    *shared.BatchEnableAlarmResponse
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
