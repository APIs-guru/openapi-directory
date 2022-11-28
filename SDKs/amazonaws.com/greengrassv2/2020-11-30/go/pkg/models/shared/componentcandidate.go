package shared

// ComponentCandidate
// Contains information about a component that is a candidate to deploy to a Greengrass core device.
type ComponentCandidate struct {
	ComponentName       *string           `json:"componentName,omitempty"`
	ComponentVersion    *string           `json:"componentVersion,omitempty"`
	VersionRequirements map[string]string `json:"versionRequirements,omitempty"`
}
