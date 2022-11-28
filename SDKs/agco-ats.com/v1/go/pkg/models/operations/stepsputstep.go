package operations

import (
	"openapi/pkg/models/shared"
)

type StepsPutStepPathParams struct {
	StepID int32 `pathParam:"style=simple,explode=false,name=stepID"`
}

type StepsPutStepRequestsInput struct {
	ApplicationXML            []byte                                `request:"mediaType=application/xml"`
	BuildSystemSharedDtoStep  *shared.BuildSystemSharedDtoStepInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoStep1 *shared.BuildSystemSharedDtoStepInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoStep2 *shared.BuildSystemSharedDtoStepInput `request:"mediaType=text/json"`
	TextXML                   []byte                                `request:"mediaType=text/xml"`
}

type StepsPutStepRequest struct {
	PathParams StepsPutStepPathParams
	Request    StepsPutStepRequestsInput
}

type StepsPutStepResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
