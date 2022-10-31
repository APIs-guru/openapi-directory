package operations

import (
	"openapi/pkg/models/shared"
)

type PackageTypesPostRequests struct {
	ApplicationXML                 []byte                                `request:"mediaType=application/xml"`
	TextXML                        []byte                                `request:"mediaType=text/xml"`
	UpdateSystemModelsPackageType  *shared.UpdateSystemModelsPackageType `request:"mediaType=application/json"`
	UpdateSystemModelsPackageType1 *shared.UpdateSystemModelsPackageType `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsPackageType2 *shared.UpdateSystemModelsPackageType `request:"mediaType=text/json"`
}

type PackageTypesPostRequest struct {
	Request PackageTypesPostRequests
}

type PackageTypesPostResponse struct {
	APIModelsAPIError                        *shared.APIModelsAPIError
	Body                                     []byte
	ContentType                              string
	PackageTypesPost200ApplicationJSONString *string
	PackageTypesPost200ApplicationXMLString  *string
	PackageTypesPost200TextJSONString        *string
	PackageTypesPost200TextXMLString         *string
	StatusCode                               int64
}
