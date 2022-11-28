package shared

// ListPresetsResponse
// The <code>ListPresetsResponse</code> structure.
type ListPresetsResponse struct {
	NextPageToken *string  `json:"NextPageToken,omitempty"`
	Presets       []Preset `json:"Presets,omitempty"`
}
