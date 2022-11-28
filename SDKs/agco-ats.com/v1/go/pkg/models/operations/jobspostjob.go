package operations

import (
	"openapi/pkg/models/shared"
)

type JobsPostJobRequestsInput struct {
	ApplicationXML           []byte                               `request:"mediaType=application/xml"`
	BuildSystemSharedDtoJob  *shared.BuildSystemSharedDtoJobInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoJob1 *shared.BuildSystemSharedDtoJobInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoJob2 *shared.BuildSystemSharedDtoJobInput `request:"mediaType=text/json"`
	TextXML                  []byte                               `request:"mediaType=text/xml"`
}

type JobsPostJobRequest struct {
	Request JobsPostJobRequestsInput
}

type JobsPostJobResponse struct {
	APIModelsAPIError                         *shared.APIModelsAPIError
	Body                                      []byte
	ContentType                               string
	JobsPostJob200ApplicationJSONInt32Integer *int32
	JobsPostJob200TextJSONInt32Integer        *int32
	StatusCode                                int64
}
