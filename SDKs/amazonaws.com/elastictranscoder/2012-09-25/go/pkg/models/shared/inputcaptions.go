package shared



type InputCaptions struct {
    CaptionSources []CaptionSource `json:"CaptionSources,omitempty"`
    MergePolicy *string `json:"MergePolicy,omitempty"`
    
}

