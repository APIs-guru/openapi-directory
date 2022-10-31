package shared

type DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum string

const (
	DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnumEdt     DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum = "EDT"
	DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnumEdtLite DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum = "EDTLite"
)

type DealerDbModelsLicenseActivationCreate struct {
	DealerCode            string                                                          `json:"DealerCode" form:"name=DealerCode"`
	LicenseActivationType *DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum `json:"LicenseActivationType,omitempty" form:"name=LicenseActivationType"`
	PostalCode            string                                                          `json:"PostalCode" form:"name=PostalCode"`
	SystemInfo            string                                                          `json:"SystemInfo" form:"name=SystemInfo"`
	VoucherCode           string                                                          `json:"VoucherCode" form:"name=VoucherCode"`
}
