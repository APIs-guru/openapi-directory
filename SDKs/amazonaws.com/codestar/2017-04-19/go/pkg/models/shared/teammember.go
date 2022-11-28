package shared

// TeamMember
// Information about a team member in a project.
type TeamMember struct {
	ProjectRole         string `json:"projectRole"`
	RemoteAccessAllowed *bool  `json:"remoteAccessAllowed,omitempty"`
	UserArn             string `json:"userArn"`
}
