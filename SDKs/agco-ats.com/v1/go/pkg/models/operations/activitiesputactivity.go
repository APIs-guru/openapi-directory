package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitiesPutActivityPathParams struct {
	ActivityID int32 `pathParam:"style=simple,explode=false,name=activityID"`
}

type ActivitiesPutActivityRequestsInput struct {
	ApplicationXML                []byte                                    `request:"mediaType=application/xml"`
	BuildSystemSharedDtoActivity  *shared.BuildSystemSharedDtoActivityInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoActivity1 *shared.BuildSystemSharedDtoActivityInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoActivity2 *shared.BuildSystemSharedDtoActivityInput `request:"mediaType=text/json"`
	TextXML                       []byte                                    `request:"mediaType=text/xml"`
}

type ActivitiesPutActivityRequest struct {
	PathParams ActivitiesPutActivityPathParams
	Request    ActivitiesPutActivityRequestsInput
}

type ActivitiesPutActivityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
