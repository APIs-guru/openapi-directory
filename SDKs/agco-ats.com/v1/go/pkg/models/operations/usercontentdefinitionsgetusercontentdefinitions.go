package operations

import (
	"openapi/pkg/models/shared"
)

type UserContentDefinitionsGetUserContentDefinitionsQueryParams struct {
	ContentDefinitionID *int32 `queryParam:"style=form,explode=true,name=contentDefinitionID"`
	Limit               *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset              *int32 `queryParam:"style=form,explode=true,name=offset"`
	UserID              *int32 `queryParam:"style=form,explode=true,name=userID"`
}

type UserContentDefinitionsGetUserContentDefinitionsRequest struct {
	QueryParams UserContentDefinitionsGetUserContentDefinitionsQueryParams
}

type UserContentDefinitionsGetUserContentDefinitionsResponse struct {
	APIModelsAPIError                                                            *shared.APIModelsAPIError
	APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition *shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition
	ContentType                                                                  string
	StatusCode                                                                   int64
}
