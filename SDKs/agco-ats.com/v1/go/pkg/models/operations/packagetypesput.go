package operations

import (
	"openapi/pkg/models/shared"
)

type PackageTypesPutPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type PackageTypesPutRequests struct {
	ApplicationXML                 []byte                                `request:"mediaType=application/xml"`
	TextXML                        []byte                                `request:"mediaType=text/xml"`
	UpdateSystemModelsPackageType  *shared.UpdateSystemModelsPackageType `request:"mediaType=application/json"`
	UpdateSystemModelsPackageType1 *shared.UpdateSystemModelsPackageType `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsPackageType2 *shared.UpdateSystemModelsPackageType `request:"mediaType=text/json"`
}

type PackageTypesPutRequest struct {
	PathParams PackageTypesPutPathParams
	Request    PackageTypesPutRequests
}

type PackageTypesPutResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
