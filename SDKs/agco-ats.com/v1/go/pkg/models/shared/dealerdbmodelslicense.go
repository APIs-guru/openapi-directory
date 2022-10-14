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
	Active                *bool                                           `json:"Active,omitempty"`
	CreatedDate           *time.Time                                      `json:"CreatedDate,omitempty"`
	DeactivatedDate       *time.Time                                      `json:"DeactivatedDate,omitempty"`
	LicenseActivationType *DealerDbModelsLicenseLicenseActivationTypeEnum `json:"LicenseActivationType,omitempty"`
	LicenseID             *string                                         `json:"LicenseID,omitempty"`
	LicenseVersion        *string                                         `json:"LicenseVersion,omitempty"`
	RefreshDate           *time.Time                                      `json:"RefreshDate,omitempty"`
	SystemInfo            *string                                         `json:"SystemInfo,omitempty"`
	UpdatedLicenseVersion *string                                         `json:"UpdatedLicenseVersion,omitempty"`
	VoucherCode           *string                                         `json:"VoucherCode,omitempty"`
}
