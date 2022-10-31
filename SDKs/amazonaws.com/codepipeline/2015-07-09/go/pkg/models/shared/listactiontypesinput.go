package shared



type ListActionTypesInput struct {
    ActionOwnerFilter *ActionOwnerEnum `json:"actionOwnerFilter,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RegionFilter *string `json:"regionFilter,omitempty"`
    
}

