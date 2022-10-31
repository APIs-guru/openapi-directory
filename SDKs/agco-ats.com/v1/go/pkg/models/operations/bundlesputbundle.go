package operations

import (
	"openapi/pkg/models/shared"
)

type BundlesPutBundlePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type BundlesPutBundleRequests struct {
	ApplicationXML            []byte                           `request:"mediaType=application/xml"`
	TextXML                   []byte                           `request:"mediaType=text/xml"`
	UpdateSystemModelsBundle  *shared.UpdateSystemModelsBundle `request:"mediaType=application/json"`
	UpdateSystemModelsBundle1 *shared.UpdateSystemModelsBundle `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsBundle2 *shared.UpdateSystemModelsBundle `request:"mediaType=text/json"`
}

type BundlesPutBundleRequest struct {
	PathParams BundlesPutBundlePathParams
	Request    BundlesPutBundleRequests
}

type BundlesPutBundleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
