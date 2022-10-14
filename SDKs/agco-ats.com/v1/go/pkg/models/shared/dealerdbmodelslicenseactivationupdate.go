package shared

type DealerDbModelsLicenseActivationUpdate struct {
	LicenseVersion string  `json:"LicenseVersion" form:"name=LicenseVersion"`
	SystemInfo     *string `json:"SystemInfo,omitempty" form:"name=SystemInfo"`
}
