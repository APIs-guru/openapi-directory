package shared

// StemmingOptionsStatus
// The stemming options configured for this search domain and the current status of those options.
type StemmingOptionsStatus struct {
	Options string
	Status  OptionStatus
}
