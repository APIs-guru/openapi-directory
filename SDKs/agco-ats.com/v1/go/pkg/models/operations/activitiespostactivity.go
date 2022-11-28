package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitiesPostActivityRequestsInput struct {
	ApplicationXML                []byte                                    `request:"mediaType=application/xml"`
	BuildSystemSharedDtoActivity  *shared.BuildSystemSharedDtoActivityInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoActivity1 *shared.BuildSystemSharedDtoActivityInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoActivity2 *shared.BuildSystemSharedDtoActivityInput `request:"mediaType=text/json"`
	TextXML                       []byte                                    `request:"mediaType=text/xml"`
}

type ActivitiesPostActivityRequest struct {
	Request ActivitiesPostActivityRequestsInput
}

type ActivitiesPostActivityResponse struct {
	APIModelsAPIError                                    *shared.APIModelsAPIError
	ActivitiesPostActivity200ApplicationJSONInt32Integer *int32
	ActivitiesPostActivity200TextJSONInt32Integer        *int32
	Body                                                 []byte
	ContentType                                          string
	StatusCode                                           int64
}
