package shared

type IamActionDefinition struct {
	Groups    []string `json:"Groups"`
	PolicyArn string   `json:"PolicyArn"`
	Roles     []string `json:"Roles"`
	Users     []string `json:"Users"`
}
