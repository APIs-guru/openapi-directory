package shared

// AddonInfo
// Information about an add-on.
type AddonInfo struct {
	AddonName     *string            `json:"addonName,omitempty"`
	AddonVersions []AddonVersionInfo `json:"addonVersions,omitempty"`
	Type          *string            `json:"type,omitempty"`
}
