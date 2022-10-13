package shared

type UpdateTeamMemberRequest struct {
	ProjectID           string  `json:"projectId"`
	ProjectRole         *string `json:"projectRole"`
	RemoteAccessAllowed *bool   `json:"remoteAccessAllowed"`
	UserArn             string  `json:"userArn"`
}
