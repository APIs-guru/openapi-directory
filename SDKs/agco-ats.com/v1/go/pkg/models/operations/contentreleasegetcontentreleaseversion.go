package operations

import (
	"openapi/pkg/models/shared"
)

type ContentReleaseGetContentReleaseVersionQueryParams struct {
	ContentDefinitionID *int32 `queryParam:"style=form,explode=true,name=contentDefinitionID"`
	Deleted             *bool  `queryParam:"style=form,explode=true,name=deleted"`
	Limit               *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset              *int32 `queryParam:"style=form,explode=true,name=offset"`
	ReleaseID           *int32 `queryParam:"style=form,explode=true,name=releaseID"`
	UserID              *int32 `queryParam:"style=form,explode=true,name=userId"`
	Version             *int32 `queryParam:"style=form,explode=true,name=version"`
}

type ContentReleaseGetContentReleaseVersionRequest struct {
	QueryParams ContentReleaseGetContentReleaseVersionQueryParams
}

type ContentReleaseGetContentReleaseVersionResponse struct {
	APIModelsAPIError                                                            *shared.APIModelsAPIError
	APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion *shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion
	ContentType                                                                  string
	StatusCode                                                                   int64
}
