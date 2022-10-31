package operations

import (
	"openapi/pkg/models/shared"
)

type UserContentDefinitionsPostUserContentDefinitionRequests struct {
	ApplicationXML                                                []byte                                                               `request:"mediaType=application/xml"`
	ContentSubmissionSharedBusinessEntitiesUserContentDefinition  *shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition `request:"mediaType=application/json"`
	ContentSubmissionSharedBusinessEntitiesUserContentDefinition1 *shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition `request:"mediaType=application/x-www-form-urlencoded"`
	ContentSubmissionSharedBusinessEntitiesUserContentDefinition2 *shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition `request:"mediaType=text/json"`
	TextXML                                                       []byte                                                               `request:"mediaType=text/xml"`
}

type UserContentDefinitionsPostUserContentDefinitionRequest struct {
	Request UserContentDefinitionsPostUserContentDefinitionRequests
}

type UserContentDefinitionsPostUserContentDefinitionResponse struct {
	APIModelsAPIError                                                             *shared.APIModelsAPIError
	Body                                                                          []byte
	ContentType                                                                   string
	StatusCode                                                                    int64
	UserContentDefinitionsPostUserContentDefinition200ApplicationJSONInt32Integer *int32
	UserContentDefinitionsPostUserContentDefinition200TextJSONInt32Integer        *int32
}
