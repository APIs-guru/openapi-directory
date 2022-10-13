package shared

type ScheduleRunConfiguration struct {
	AuxiliaryApps         []string               `json:"auxiliaryApps"`
	BillingMethod         *BillingMethodEnum     `json:"billingMethod"`
	CustomerArtifactPaths *CustomerArtifactPaths `json:"customerArtifactPaths"`
	ExtraDataPackageArn   *string                `json:"extraDataPackageArn"`
	Locale                *string                `json:"locale"`
	Location              *Location              `json:"location"`
	NetworkProfileArn     *string                `json:"networkProfileArn"`
	Radios                *Radios                `json:"radios"`
	VpceConfigurationArns []string               `json:"vpceConfigurationArns"`
}
