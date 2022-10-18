package operations

import (
	"openapi/pkg/models/shared"
)

type BundlesPostBundleRequests struct {
	ApplicationXML            []byte                           `request:"mediaType=application/xml"`
	TextXML                   []byte                           `request:"mediaType=text/xml"`
	UpdateSystemModelsBundle  *shared.UpdateSystemModelsBundle `request:"mediaType=application/json"`
	UpdateSystemModelsBundle1 *shared.UpdateSystemModelsBundle `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsBundle2 *shared.UpdateSystemModelsBundle `request:"mediaType=text/json"`
}

type BundlesPostBundleRequest struct {
	Request BundlesPostBundleRequests
}

type BundlesPostBundleResponse struct {
	APIModelsAPIError                         *shared.APIModelsAPIError
	Body                                      []byte
	BundlesPostBundle200ApplicationJSONString *string
	BundlesPostBundle200TextJSONString        *string
	ContentType                               string
	StatusCode                                int64
}
