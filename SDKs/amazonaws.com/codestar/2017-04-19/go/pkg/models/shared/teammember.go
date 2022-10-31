package shared

type TeamMember struct {
	ProjectRole         string `json:"projectRole"`
	RemoteAccessAllowed *bool  `json:"remoteAccessAllowed,omitempty"`
	UserArn             string `json:"userArn"`
}
