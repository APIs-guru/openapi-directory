package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDetectorModelPathParams struct {
	DetectorModelName string `pathParam:"style=simple,explode=false,name=detectorModelName"`
}

type UpdateDetectorModelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateDetectorModelRequestBodyDetectorModelDefinition struct {
	InitialStateName *string        `json:"initialStateName,omitempty"`
	States           []shared.State `json:"states,omitempty"`
}

type UpdateDetectorModelRequestBodyEvaluationMethodEnum string

const (
	UpdateDetectorModelRequestBodyEvaluationMethodEnumBatch  UpdateDetectorModelRequestBodyEvaluationMethodEnum = "BATCH"
	UpdateDetectorModelRequestBodyEvaluationMethodEnumSerial UpdateDetectorModelRequestBodyEvaluationMethodEnum = "SERIAL"
)

type UpdateDetectorModelRequestBody struct {
	DetectorModelDefinition  UpdateDetectorModelRequestBodyDetectorModelDefinition `json:"detectorModelDefinition"`
	DetectorModelDescription *string                                               `json:"detectorModelDescription,omitempty"`
	EvaluationMethod         *UpdateDetectorModelRequestBodyEvaluationMethodEnum   `json:"evaluationMethod,omitempty"`
	RoleArn                  string                                                `json:"roleArn"`
}

type UpdateDetectorModelRequest struct {
	PathParams UpdateDetectorModelPathParams
	Headers    UpdateDetectorModelHeaders
	Request    UpdateDetectorModelRequestBody `request:"mediaType=application/json"`
}

type UpdateDetectorModelResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceInUseException      *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UpdateDetectorModelResponse *shared.UpdateDetectorModelResponse
}
