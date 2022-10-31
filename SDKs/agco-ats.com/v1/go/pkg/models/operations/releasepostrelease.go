package operations

import (
	"openapi/pkg/models/shared"
)

type ReleasePostReleaseRequests struct {
	ApplicationXML                                  []byte                                                 `request:"mediaType=application/xml"`
	ContentSubmissionSharedBusinessEntitiesRelease  *shared.ContentSubmissionSharedBusinessEntitiesRelease `request:"mediaType=application/json"`
	ContentSubmissionSharedBusinessEntitiesRelease1 *shared.ContentSubmissionSharedBusinessEntitiesRelease `request:"mediaType=application/x-www-form-urlencoded"`
	ContentSubmissionSharedBusinessEntitiesRelease2 *shared.ContentSubmissionSharedBusinessEntitiesRelease `request:"mediaType=text/json"`
	TextXML                                         []byte                                                 `request:"mediaType=text/xml"`
}

type ReleasePostReleaseRequest struct {
	Request ReleasePostReleaseRequests
}

type ReleasePostReleaseResponse struct {
	APIModelsAPIError                                *shared.APIModelsAPIError
	Body                                             []byte
	ContentType                                      string
	ReleasePostRelease200ApplicationJSONInt32Integer *int32
	ReleasePostRelease200TextJSONInt32Integer        *int32
	StatusCode                                       int64
}
