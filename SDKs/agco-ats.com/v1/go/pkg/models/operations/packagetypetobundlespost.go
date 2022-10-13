package operations

import (
	"openapi/pkg/models/shared"
)

type PackageTypetoBundlesPostRequests struct {
	ApplicationXML                           []byte                                          `request:"mediaType=application/xml"`
	TextXML                                  []byte                                          `request:"mediaType=text/xml"`
	UpdateSystemModelsPackageTypeIDtoBundle  *shared.UpdateSystemModelsPackageTypeIDtoBundle `request:"mediaType=application/json"`
	UpdateSystemModelsPackageTypeIDtoBundle1 *shared.UpdateSystemModelsPackageTypeIDtoBundle `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsPackageTypeIDtoBundle2 *shared.UpdateSystemModelsPackageTypeIDtoBundle `request:"mediaType=text/json"`
}

type PackageTypetoBundlesPostRequest struct {
	Request PackageTypetoBundlesPostRequests
}

type PackageTypetoBundlesPostResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
