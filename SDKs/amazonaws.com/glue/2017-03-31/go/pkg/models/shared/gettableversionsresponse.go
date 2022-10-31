package shared



type GetTableVersionsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TableVersions []TableVersion `json:"TableVersions,omitempty"`
    
}

