package shared



type ListFindingsResponse struct {
    FindingArns []string `json:"findingArns"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

