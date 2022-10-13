package shared

type TeamMember struct {
	ProjectRole         string `json:"projectRole"`
	RemoteAccessAllowed *bool  `json:"remoteAccessAllowed"`
	UserArn             string `json:"userArn"`
}
