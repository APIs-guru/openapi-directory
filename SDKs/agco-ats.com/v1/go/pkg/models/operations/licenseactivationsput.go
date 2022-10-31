package operations

import (
	"openapi/pkg/models/shared"
)

type LicenseActivationsPutPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type LicenseActivationsPutRequests struct {
	ApplicationXML                         []byte                                        `request:"mediaType=application/xml"`
	DealerDbModelsLicenseActivationUpdate  *shared.DealerDbModelsLicenseActivationUpdate `request:"mediaType=application/json"`
	DealerDbModelsLicenseActivationUpdate1 *shared.DealerDbModelsLicenseActivationUpdate `request:"mediaType=application/x-www-form-urlencoded"`
	DealerDbModelsLicenseActivationUpdate2 *shared.DealerDbModelsLicenseActivationUpdate `request:"mediaType=text/json"`
	TextXML                                []byte                                        `request:"mediaType=text/xml"`
}

type LicenseActivationsPutRequest struct {
	PathParams LicenseActivationsPutPathParams
	Request    LicenseActivationsPutRequests
}

type LicenseActivationsPutResponse struct {
	APIModelsAPIError               *shared.APIModelsAPIError
	Body                            []byte
	ContentType                     string
	DealerDbModelsLicenseActivation *shared.DealerDbModelsLicenseActivation
	StatusCode                      int64
}
