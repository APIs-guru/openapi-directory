package shared



type TransformParameters struct {
    FindMatchesParameters *FindMatchesParameters `json:"FindMatchesParameters,omitempty"`
    TransformType TransformTypeEnum `json:"TransformType"`
    
}

