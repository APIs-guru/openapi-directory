package shared



type UpdateTeamMemberResult struct {
    ProjectRole *string `json:"projectRole,omitempty"`
    RemoteAccessAllowed *bool `json:"remoteAccessAllowed,omitempty"`
    UserArn *string `json:"userArn,omitempty"`
    
}

