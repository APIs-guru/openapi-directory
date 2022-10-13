package operations

import (
	"openapi/pkg/models/shared"
)

type ReleaseGetReleasePathParams struct {
	ReleaseID int32 `pathParam:"style=simple,explode=false,name=ReleaseId"`
}

type ReleaseGetReleaseRequest struct {
	PathParams ReleaseGetReleasePathParams
}

type ReleaseGetReleaseResponse struct {
	APIModelsAPIError                              *shared.APIModelsAPIError
	Body                                           []byte
	ContentSubmissionSharedBusinessEntitiesRelease *shared.ContentSubmissionSharedBusinessEntitiesRelease
	ContentType                                    string
	StatusCode                                     int64
}
