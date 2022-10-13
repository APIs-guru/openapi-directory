package shared

type AssociateTeamMemberRequest struct {
	ClientRequestToken  *string `json:"clientRequestToken"`
	ProjectID           string  `json:"projectId"`
	ProjectRole         string  `json:"projectRole"`
	RemoteAccessAllowed *bool   `json:"remoteAccessAllowed"`
	UserArn             string  `json:"userArn"`
}
