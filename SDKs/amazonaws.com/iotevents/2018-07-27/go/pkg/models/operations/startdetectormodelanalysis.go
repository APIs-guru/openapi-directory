package operations

import (
	"openapi/pkg/models/shared"
)

type StartDetectorModelAnalysisHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type StartDetectorModelAnalysisRequestBodyDetectorModelDefinition struct {
	InitialStateName *string        `json:"initialStateName,omitempty"`
	States           []shared.State `json:"states,omitempty"`
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
