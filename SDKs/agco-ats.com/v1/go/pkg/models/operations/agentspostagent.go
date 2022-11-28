package operations

import (
	"openapi/pkg/models/shared"
)

type AgentsPostAgentRequestsInput struct {
	ApplicationXML             []byte                                 `request:"mediaType=application/xml"`
	BuildSystemSharedDtoAgent  *shared.BuildSystemSharedDtoAgentInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoAgent1 *shared.BuildSystemSharedDtoAgentInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoAgent2 *shared.BuildSystemSharedDtoAgentInput `request:"mediaType=text/json"`
	TextXML                    []byte                                 `request:"mediaType=text/xml"`
}

type AgentsPostAgentRequest struct {
	Request AgentsPostAgentRequestsInput
}

type AgentsPostAgentResponse struct {
	APIModelsAPIError                             *shared.APIModelsAPIError
	AgentsPostAgent200ApplicationJSONInt32Integer *int32
	AgentsPostAgent200TextJSONInt32Integer        *int32
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
}
