package shared

// ScheduleRunConfiguration
// Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.
type ScheduleRunConfiguration struct {
	AuxiliaryApps         []string               `json:"auxiliaryApps,omitempty"`
	BillingMethod         *BillingMethodEnum     `json:"billingMethod,omitempty"`
	CustomerArtifactPaths *CustomerArtifactPaths `json:"customerArtifactPaths,omitempty"`
	ExtraDataPackageArn   *string                `json:"extraDataPackageArn,omitempty"`
	Locale                *string                `json:"locale,omitempty"`
	Location              *Location              `json:"location,omitempty"`
	NetworkProfileArn     *string                `json:"networkProfileArn,omitempty"`
	Radios                *Radios                `json:"radios,omitempty"`
	VpceConfigurationArns []string               `json:"vpceConfigurationArns,omitempty"`
}
