package shared

type Captions struct {
	CaptionFormats []CaptionFormat `json:"CaptionFormats,omitempty"`
	CaptionSources []CaptionSource `json:"CaptionSources,omitempty"`
	MergePolicy    *string         `json:"MergePolicy,omitempty"`
}
