package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDetectorModelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDetectorModelRequestBodyDetectorModelDefinition struct {
	InitialStateName *string        `json:"initialStateName,omitempty"`
	States           []shared.State `json:"states,omitempty"`
}

type CreateDetectorModelRequestBodyEvaluationMethodEnum string

const (
	CreateDetectorModelRequestBodyEvaluationMethodEnumBatch  CreateDetectorModelRequestBodyEvaluationMethodEnum = "BATCH"
	CreateDetectorModelRequestBodyEvaluationMethodEnumSerial CreateDetectorModelRequestBodyEvaluationMethodEnum = "SERIAL"
)

type CreateDetectorModelRequestBody struct {
	DetectorModelDefinition  CreateDetectorModelRequestBodyDetectorModelDefinition `json:"detectorModelDefinition"`
	DetectorModelDescription *string                                               `json:"detectorModelDescription,omitempty"`
	DetectorModelName        string                                                `json:"detectorModelName"`
	EvaluationMethod         *CreateDetectorModelRequestBodyEvaluationMethodEnum   `json:"evaluationMethod,omitempty"`
	Key                      *string                                               `json:"key,omitempty"`
	RoleArn                  string                                                `json:"roleArn"`
	Tags                     []shared.Tag                                          `json:"tags,omitempty"`
}

type CreateDetectorModelRequest struct {
	Headers CreateDetectorModelHeaders
	Request CreateDetectorModelRequestBody `request:"mediaType=application/json"`
}

type CreateDetectorModelResponse struct {
	ContentType                    string
	CreateDetectorModelResponse    *shared.CreateDetectorModelResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceInUseException         *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
