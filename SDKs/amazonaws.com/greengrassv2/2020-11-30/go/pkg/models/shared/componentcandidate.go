package shared

type ComponentCandidate struct {
	ComponentName       *string           `json:"componentName,omitempty"`
	ComponentVersion    *string           `json:"componentVersion,omitempty"`
	VersionRequirements map[string]string `json:"versionRequirements,omitempty"`
}
