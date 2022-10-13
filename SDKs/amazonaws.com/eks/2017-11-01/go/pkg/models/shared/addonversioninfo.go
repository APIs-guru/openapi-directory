package shared

type AddonVersionInfo struct {
	AddonVersion    *string         `json:"addonVersion"`
	Architecture    []string        `json:"architecture"`
	Compatibilities []Compatibility `json:"compatibilities"`
}
