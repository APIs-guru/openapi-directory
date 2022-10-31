package operations

import (
	"openapi/pkg/models/shared"
)

type BatchEnableAlarmHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
