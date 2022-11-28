package shared

// IamActionDefinition
//
//	The AWS Identity and Access Management (IAM) action definition details.
type IamActionDefinition struct {
	Groups    []string `json:"Groups,omitempty"`
	PolicyArn string   `json:"PolicyArn"`
	Roles     []string `json:"Roles,omitempty"`
	Users     []string `json:"Users,omitempty"`
}
