package shared

// SystemsManagerAgent
// Contains settings for the SSM agent on your build instance.
type SystemsManagerAgent struct {
	UninstallAfterBuild *bool `json:"uninstallAfterBuild,omitempty"`
}
