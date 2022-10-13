package shared

type Captions struct {
	CaptionFormats []CaptionFormat `json:"CaptionFormats"`
	CaptionSources []CaptionSource `json:"CaptionSources"`
	MergePolicy    *string         `json:"MergePolicy"`
}
