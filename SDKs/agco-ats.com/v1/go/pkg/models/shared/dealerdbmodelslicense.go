package shared

import (
	"time"
)

type DealerDbModelsLicenseLicenseActivationTypeEnum string

const (
	DealerDbModelsLicenseLicenseActivationTypeEnumEdt     DealerDbModelsLicenseLicenseActivationTypeEnum = "EDT"
	DealerDbModelsLicenseLicenseActivationTypeEnumEdtLite DealerDbModelsLicenseLicenseActivationTypeEnum = "EDTLite"
)

type DealerDbModelsLicense struct {
	Active                *bool                                           `json:"Active"`
	CreatedDate           *time.Time                                      `json:"CreatedDate"`
	DeactivatedDate       *time.Time                                      `json:"DeactivatedDate"`
	LicenseActivationType *DealerDbModelsLicenseLicenseActivationTypeEnum `json:"LicenseActivationType"`
	LicenseID             *string                                         `json:"LicenseID"`
	LicenseVersion        *string                                         `json:"LicenseVersion"`
	RefreshDate           *time.Time                                      `json:"RefreshDate"`
	SystemInfo            *string                                         `json:"SystemInfo"`
	UpdatedLicenseVersion *string                                         `json:"UpdatedLicenseVersion"`
	VoucherCode           *string                                         `json:"VoucherCode"`
}
