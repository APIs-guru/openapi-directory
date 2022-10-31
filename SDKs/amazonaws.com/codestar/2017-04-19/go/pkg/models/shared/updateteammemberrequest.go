package shared



type UpdateTeamMemberRequest struct {
    ProjectID string `json:"projectId"`
    ProjectRole *string `json:"projectRole,omitempty"`
    RemoteAccessAllowed *bool `json:"remoteAccessAllowed,omitempty"`
    UserArn string `json:"userArn"`
    
}

