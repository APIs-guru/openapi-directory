package shared

// AddonVersionInfo
// Information about an add-on version.
type AddonVersionInfo struct {
	AddonVersion    *string         `json:"addonVersion,omitempty"`
	Architecture    []string        `json:"architecture,omitempty"`
	Compatibilities []Compatibility `json:"compatibilities,omitempty"`
}
