package operations

import (
	"openapi/pkg/models/shared"
)

type BatchUpdateDetectorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchUpdateDetectorRequestBody struct {
	Detectors []shared.UpdateDetectorRequest `json:"detectors"`
}

type BatchUpdateDetectorRequest struct {
	Headers BatchUpdateDetectorHeaders
	Request BatchUpdateDetectorRequestBody `request:"mediaType=application/json"`
}

type BatchUpdateDetectorResponse struct {
	BatchUpdateDetectorResponse *shared.BatchUpdateDetectorResponse
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
