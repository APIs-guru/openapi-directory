package operations

import (
	"openapi/pkg/models/shared"
)

type PackagesPutPackagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type PackagesPutPackageRequests struct {
	ApplicationXML             []byte                            `request:"mediaType=application/xml"`
	TextXML                    []byte                            `request:"mediaType=text/xml"`
	UpdateSystemModelsPackage  *shared.UpdateSystemModelsPackage `request:"mediaType=application/json"`
	UpdateSystemModelsPackage1 *shared.UpdateSystemModelsPackage `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsPackage2 *shared.UpdateSystemModelsPackage `request:"mediaType=text/json"`
}

type PackagesPutPackageRequest struct {
	PathParams PackagesPutPackagePathParams
	Request    PackagesPutPackageRequests
}

type PackagesPutPackageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
