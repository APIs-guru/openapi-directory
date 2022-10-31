package operations

import (
	"openapi/pkg/models/shared"
)

type ContentDefinitionsGetContentDefinitionAttributesPathParams struct {
	ContentDefinitionID int32 `pathParam:"style=simple,explode=false,name=contentDefinitionID"`
}

type ContentDefinitionsGetContentDefinitionAttributesQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type ContentDefinitionsGetContentDefinitionAttributesRequest struct {
	PathParams  ContentDefinitionsGetContentDefinitionAttributesPathParams
	QueryParams ContentDefinitionsGetContentDefinitionAttributesQueryParams
}

type ContentDefinitionsGetContentDefinitionAttributesResponse struct {
	APIModelsAPIError                                                                 *shared.APIModelsAPIError
	APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute *shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute
	ContentType                                                                       string
	StatusCode                                                                        int64
}
