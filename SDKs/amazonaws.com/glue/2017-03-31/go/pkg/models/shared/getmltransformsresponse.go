package shared



type GetMlTransformsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Transforms []MlTransform `json:"Transforms"`
    
}

