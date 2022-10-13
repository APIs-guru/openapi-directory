package shared

type AddonInfo struct {
	AddonName     *string            `json:"addonName"`
	AddonVersions []AddonVersionInfo `json:"addonVersions"`
	Type          *string            `json:"type"`
}
