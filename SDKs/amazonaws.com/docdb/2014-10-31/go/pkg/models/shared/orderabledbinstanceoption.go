package shared

// OrderableDbInstanceOption
// The options that are available for an instance.
type OrderableDbInstanceOption struct {
	AvailabilityZones []AvailabilityZone
	DbInstanceClass   *string
	Engine            *string
	EngineVersion     *string
	LicenseModel      *string
	Vpc               *bool
}
