package operations

import (
	"openapi/pkg/models/shared"
)

type ContentSubmissionsGetContentSubmissionsQueryParams struct {
	ContentDefinitionID *int32  `queryParam:"style=form,explode=true,name=contentDefinitionID"`
	IncludeAttributes   *string `queryParam:"style=form,explode=true,name=includeAttributes"`
	IncludeDefinition   *bool   `queryParam:"style=form,explode=true,name=includeDefinition"`
	Limit               *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset              *int32  `queryParam:"style=form,explode=true,name=offset"`
	ReleaseID           *int32  `queryParam:"style=form,explode=true,name=releaseID"`
	TypeID              *int32  `queryParam:"style=form,explode=true,name=typeID"`
	UserID              *int32  `queryParam:"style=form,explode=true,name=userID"`
	Version             *int32  `queryParam:"style=form,explode=true,name=version"`
}

type ContentSubmissionsGetContentSubmissionsRequest struct {
	QueryParams ContentSubmissionsGetContentSubmissionsQueryParams
}

type ContentSubmissionsGetContentSubmissionsResponse struct {
	APIModelsAPIError                                                        *shared.APIModelsAPIError
	APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission *shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission
	ContentType                                                              string
	StatusCode                                                               int64
}
