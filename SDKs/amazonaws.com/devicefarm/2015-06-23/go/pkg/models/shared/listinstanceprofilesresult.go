package shared



type ListInstanceProfilesResult struct {
    InstanceProfiles []InstanceProfile `json:"instanceProfiles,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

