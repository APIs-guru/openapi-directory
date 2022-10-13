package shared

type ComponentCandidate struct {
	ComponentName       *string           `json:"componentName"`
	ComponentVersion    *string           `json:"componentVersion"`
	VersionRequirements map[string]string `json:"versionRequirements"`
}
