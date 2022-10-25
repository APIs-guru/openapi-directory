package operations

import (
	"openapi/pkg/models/shared"
)

type PackagesPostPackageRequests struct {
	ApplicationXML             []byte                            `request:"mediaType=application/xml"`
	TextXML                    []byte                            `request:"mediaType=text/xml"`
	UpdateSystemModelsPackage  *shared.UpdateSystemModelsPackage `request:"mediaType=application/json"`
	UpdateSystemModelsPackage1 *shared.UpdateSystemModelsPackage `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsPackage2 *shared.UpdateSystemModelsPackage `request:"mediaType=text/json"`
}

type PackagesPostPackageRequest struct {
	Request PackagesPostPackageRequests
}

type PackagesPostPackageResponse struct {
	APIModelsAPIError                           *shared.APIModelsAPIError
	Body                                        []byte
	ContentType                                 string
	PackagesPostPackage200ApplicationJSONString *string
	PackagesPostPackage200ApplicationXMLString  *string
	PackagesPostPackage200TextJSONString        *string
	PackagesPostPackage200TextXMLString         *string
	StatusCode                                  int64
}
