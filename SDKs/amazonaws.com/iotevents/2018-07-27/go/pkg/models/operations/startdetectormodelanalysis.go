package operations

import (
	"openapi/pkg/models/shared"
)

type StartDetectorModelAnalysisHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartDetectorModelAnalysisRequestBodyDetectorModelDefinition struct {
	InitialStateName *string        `json:"initialStateName"`
	States           []shared.State `json:"states"`
}

type StartDetectorModelAnalysisRequestBody struct {
	DetectorModelDefinition StartDetectorModelAnalysisRequestBodyDetectorModelDefinition `json:"detectorModelDefinition"`
}

type StartDetectorModelAnalysisRequest struct {
	Headers StartDetectorModelAnalysisHeaders
	Request StartDetectorModelAnalysisRequestBody `request:"mediaType=application/json"`
}

type StartDetectorModelAnalysisResponse struct {
	ContentType                        string
	InternalFailureException           *interface{}
	InvalidRequestException            *interface{}
	LimitExceededException             *interface{}
	ServiceUnavailableException        *interface{}
	StartDetectorModelAnalysisResponse *shared.StartDetectorModelAnalysisResponse
	StatusCode                         int64
	ThrottlingException                *interface{}
}
