package shared



type ListNetworkProfilesResult struct {
    NetworkProfiles []NetworkProfile `json:"networkProfiles,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

