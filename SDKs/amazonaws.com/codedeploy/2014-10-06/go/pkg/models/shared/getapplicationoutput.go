package shared

// GetApplicationOutput
// Represents the output of a <code>GetApplication</code> operation.
type GetApplicationOutput struct {
	Application *ApplicationInfo `json:"application,omitempty"`
}
