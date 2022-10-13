package operations

import (
	"openapi/pkg/models/shared"
)

type BatchAcknowledgeAlarmHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchAcknowledgeAlarmRequestBody struct {
	AcknowledgeActionRequests []shared.AcknowledgeAlarmActionRequest `json:"acknowledgeActionRequests"`
}

type BatchAcknowledgeAlarmRequest struct {
	Headers BatchAcknowledgeAlarmHeaders
	Request BatchAcknowledgeAlarmRequestBody `request:"mediaType=application/json"`
}

type BatchAcknowledgeAlarmResponse struct {
	BatchAcknowledgeAlarmResponse *shared.BatchAcknowledgeAlarmResponse
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
