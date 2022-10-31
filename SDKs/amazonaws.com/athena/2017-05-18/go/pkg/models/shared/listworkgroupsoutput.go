package shared



type ListWorkGroupsOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    WorkGroups []WorkGroupSummary `json:"WorkGroups,omitempty"`
    
}

