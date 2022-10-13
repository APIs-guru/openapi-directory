package shared

type UpdateTeamMemberResult struct {
	ProjectRole         *string `json:"projectRole"`
	RemoteAccessAllowed *bool   `json:"remoteAccessAllowed"`
	UserArn             *string `json:"userArn"`
}
