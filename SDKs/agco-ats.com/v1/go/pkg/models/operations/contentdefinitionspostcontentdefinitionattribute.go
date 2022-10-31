package operations

import (
	"openapi/pkg/models/shared"
)

type ContentDefinitionsPostContentDefinitionAttributePathParams struct {
	ContentDefinitionID int32 `pathParam:"style=simple,explode=false,name=contentDefinitionID"`
}

type ContentDefinitionsPostContentDefinitionAttributeRequests struct {
	ApplicationXML                                                     []byte                                                                    `request:"mediaType=application/xml"`
	ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute  *shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute `request:"mediaType=application/json"`
	ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute1 *shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute `request:"mediaType=application/x-www-form-urlencoded"`
	ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute2 *shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute `request:"mediaType=text/json"`
	TextXML                                                            []byte                                                                    `request:"mediaType=text/xml"`
}

type ContentDefinitionsPostContentDefinitionAttributeRequest struct {
	PathParams ContentDefinitionsPostContentDefinitionAttributePathParams
	Request    ContentDefinitionsPostContentDefinitionAttributeRequests
}

type ContentDefinitionsPostContentDefinitionAttributeResponse struct {
	APIModelsAPIError                                                              *shared.APIModelsAPIError
	Body                                                                           []byte
	ContentDefinitionsPostContentDefinitionAttribute200ApplicationJSONInt32Integer *int32
	ContentDefinitionsPostContentDefinitionAttribute200TextJSONInt32Integer        *int32
	ContentType                                                                    string
	StatusCode                                                                     int64
}
