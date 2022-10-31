package operations

import (
	"openapi/pkg/models/shared"
)

type PackageTypetoBundlesPutRequests struct {
	ApplicationXML                           []byte                                          `request:"mediaType=application/xml"`
	TextXML                                  []byte                                          `request:"mediaType=text/xml"`
	UpdateSystemModelsPackageTypeIDtoBundle  *shared.UpdateSystemModelsPackageTypeIDtoBundle `request:"mediaType=application/json"`
	UpdateSystemModelsPackageTypeIDtoBundle1 *shared.UpdateSystemModelsPackageTypeIDtoBundle `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsPackageTypeIDtoBundle2 *shared.UpdateSystemModelsPackageTypeIDtoBundle `request:"mediaType=text/json"`
}

type PackageTypetoBundlesPutRequest struct {
	Request PackageTypetoBundlesPutRequests
}

type PackageTypetoBundlesPutResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
