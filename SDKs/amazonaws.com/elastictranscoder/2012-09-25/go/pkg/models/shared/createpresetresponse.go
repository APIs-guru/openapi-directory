package shared

// CreatePresetResponse
// The <code>CreatePresetResponse</code> structure.
type CreatePresetResponse struct {
	Preset  *Preset `json:"Preset,omitempty"`
	Warning *string `json:"Warning,omitempty"`
}
