package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV2ContentReleasesContentReleaseIDPathParams struct {
	ContentReleaseID int32 `pathParam:"style=simple,explode=false,name=ContentReleaseId"`
}

type GetAPIV2ContentReleasesContentReleaseIDRequest struct {
	PathParams GetAPIV2ContentReleasesContentReleaseIDPathParams
}

type GetAPIV2ContentReleasesContentReleaseIDResponse struct {
	APIModelsAPIError                                            *shared.APIModelsAPIError
	Body                                                         []byte
	ContentSubmissionSharedBusinessEntitiesContentReleaseVersion *shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion
	ContentType                                                  string
	StatusCode                                                   int64
}
