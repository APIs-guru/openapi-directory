package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityRunsPutActivityRunPathParams struct {
	ActivityRunID int32 `pathParam:"style=simple,explode=false,name=activityRunID"`
}

type ActivityRunsPutActivityRunRequestsInput struct {
	ApplicationXML                   []byte                                       `request:"mediaType=application/xml"`
	BuildSystemSharedDtoActivityRun  *shared.BuildSystemSharedDtoActivityRunInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoActivityRun1 *shared.BuildSystemSharedDtoActivityRunInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoActivityRun2 *shared.BuildSystemSharedDtoActivityRunInput `request:"mediaType=text/json"`
	TextXML                          []byte                                       `request:"mediaType=text/xml"`
}

type ActivityRunsPutActivityRunRequest struct {
	PathParams ActivityRunsPutActivityRunPathParams
	Request    ActivityRunsPutActivityRunRequestsInput
}

type ActivityRunsPutActivityRunResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
