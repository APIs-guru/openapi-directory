package operations

import (
	"openapi/pkg/models/shared"
)

type AgentsGetCurrentAgentAsyncResponse struct {
	APIModelsAPIError         *shared.APIModelsAPIError
	Body                      []byte
	BuildSystemSharedDtoAgent *shared.BuildSystemSharedDtoAgent
	ContentType               string
	StatusCode                int64
}
