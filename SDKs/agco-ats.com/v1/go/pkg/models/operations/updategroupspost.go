package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupsPostRequests struct {
	ApplicationXML                 []byte                                `request:"mediaType=application/xml"`
	TextXML                        []byte                                `request:"mediaType=text/xml"`
	UpdateSystemModelsUpdateGroup  *shared.UpdateSystemModelsUpdateGroup `request:"mediaType=application/json"`
	UpdateSystemModelsUpdateGroup1 *shared.UpdateSystemModelsUpdateGroup `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsUpdateGroup2 *shared.UpdateSystemModelsUpdateGroup `request:"mediaType=text/json"`
}

type UpdateGroupsPostRequest struct {
	Request UpdateGroupsPostRequests
}

type UpdateGroupsPostResponse struct {
	APIModelsAPIError                        *shared.APIModelsAPIError
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	UpdateGroupsPost200ApplicationJSONString *string
	UpdateGroupsPost200ApplicationXMLString  *string
	UpdateGroupsPost200TextJSONString        *string
	UpdateGroupsPost200TextXMLString         *string
}
