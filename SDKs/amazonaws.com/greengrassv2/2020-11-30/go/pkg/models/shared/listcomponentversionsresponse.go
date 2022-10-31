package shared



type ListComponentVersionsResponse struct {
    ComponentVersions []ComponentVersionListItem `json:"componentVersions,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

