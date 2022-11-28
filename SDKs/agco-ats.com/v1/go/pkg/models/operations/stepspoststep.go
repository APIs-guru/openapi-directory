package operations

import (
	"openapi/pkg/models/shared"
)

type StepsPostStepRequestsInput struct {
	ApplicationXML            []byte                                `request:"mediaType=application/xml"`
	BuildSystemSharedDtoStep  *shared.BuildSystemSharedDtoStepInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoStep1 *shared.BuildSystemSharedDtoStepInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoStep2 *shared.BuildSystemSharedDtoStepInput `request:"mediaType=text/json"`
	TextXML                   []byte                                `request:"mediaType=text/xml"`
}

type StepsPostStepRequest struct {
	Request StepsPostStepRequestsInput
}

type StepsPostStepResponse struct {
	APIModelsAPIError                           *shared.APIModelsAPIError
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	StepsPostStep200ApplicationJSONInt32Integer *int32
	StepsPostStep200TextJSONInt32Integer        *int32
}
