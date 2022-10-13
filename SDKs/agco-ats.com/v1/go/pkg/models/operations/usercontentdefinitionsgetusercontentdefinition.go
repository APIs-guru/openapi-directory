package operations

import (
	"openapi/pkg/models/shared"
)

type UserContentDefinitionsGetUserContentDefinitionPathParams struct {
	UserContentDefinitionID int32 `pathParam:"style=simple,explode=false,name=userContentDefinitionID"`
}

type UserContentDefinitionsGetUserContentDefinitionRequest struct {
	PathParams UserContentDefinitionsGetUserContentDefinitionPathParams
}

type UserContentDefinitionsGetUserContentDefinitionResponse struct {
	APIModelsAPIError                                            *shared.APIModelsAPIError
	Body                                                         []byte
	ContentSubmissionSharedBusinessEntitiesUserContentDefinition *shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition
	ContentType                                                  string
	StatusCode                                                   int64
}
