package shared



type IamActionDefinition struct {
    Groups []string `json:"Groups,omitempty"`
    PolicyArn string `json:"PolicyArn"`
    Roles []string `json:"Roles,omitempty"`
    Users []string `json:"Users,omitempty"`
    
}

