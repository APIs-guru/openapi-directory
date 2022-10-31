package shared



type AssociateTeamMemberRequest struct {
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    ProjectID string `json:"projectId"`
    ProjectRole string `json:"projectRole"`
    RemoteAccessAllowed *bool `json:"remoteAccessAllowed,omitempty"`
    UserArn string `json:"userArn"`
    
}

