package operations

import (
	"openapi/pkg/models/shared"
)

type ContentSubmissionsGetContentSubmissionAttributesPathParams struct {
	ContentSubmissionID int32 `pathParam:"style=simple,explode=false,name=contentSubmissionID"`
}

type ContentSubmissionsGetContentSubmissionAttributesQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type ContentSubmissionsGetContentSubmissionAttributesRequest struct {
	PathParams  ContentSubmissionsGetContentSubmissionAttributesPathParams
	QueryParams ContentSubmissionsGetContentSubmissionAttributesQueryParams
}

type ContentSubmissionsGetContentSubmissionAttributesResponse struct {
	APIModelsAPIError                                                                 *shared.APIModelsAPIError
	APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute *shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute
	ContentType                                                                       string
	StatusCode                                                                        int64
}
