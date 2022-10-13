package shared

type InputCaptions struct {
	CaptionSources []CaptionSource `json:"CaptionSources"`
	MergePolicy    *string         `json:"MergePolicy"`
}
