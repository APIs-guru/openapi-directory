package operations

import (
	"openapi/pkg/models/shared"
)

type LicenseActivationsPostRequests struct {
	ApplicationXML                         []byte                                        `request:"mediaType=application/xml"`
	DealerDbModelsLicenseActivationCreate  *shared.DealerDbModelsLicenseActivationCreate `request:"mediaType=application/json"`
	DealerDbModelsLicenseActivationCreate1 *shared.DealerDbModelsLicenseActivationCreate `request:"mediaType=application/x-www-form-urlencoded"`
	DealerDbModelsLicenseActivationCreate2 *shared.DealerDbModelsLicenseActivationCreate `request:"mediaType=text/json"`
	TextXML                                []byte                                        `request:"mediaType=text/xml"`
}

type LicenseActivationsPostRequest struct {
	Request LicenseActivationsPostRequests
}

type LicenseActivationsPostResponse struct {
	APIModelsAPIError               *shared.APIModelsAPIError
	Body                            []byte
	ContentType                     string
	DealerDbModelsLicenseActivation *shared.DealerDbModelsLicenseActivation
	StatusCode                      int64
}
