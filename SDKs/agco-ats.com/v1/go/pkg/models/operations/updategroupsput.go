package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupsPutPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type UpdateGroupsPutRequests struct {
	ApplicationXML                 []byte                                `request:"mediaType=application/xml"`
	TextXML                        []byte                                `request:"mediaType=text/xml"`
	UpdateSystemModelsUpdateGroup  *shared.UpdateSystemModelsUpdateGroup `request:"mediaType=application/json"`
	UpdateSystemModelsUpdateGroup1 *shared.UpdateSystemModelsUpdateGroup `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsUpdateGroup2 *shared.UpdateSystemModelsUpdateGroup `request:"mediaType=text/json"`
}

type UpdateGroupsPutRequest struct {
	PathParams UpdateGroupsPutPathParams
	Request    UpdateGroupsPutRequests
}

type UpdateGroupsPutResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
