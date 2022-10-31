package shared



type Definition struct {
    IamActionDefinition *IamActionDefinition `json:"IamActionDefinition,omitempty"`
    ScpActionDefinition *ScpActionDefinition `json:"ScpActionDefinition,omitempty"`
    SsmActionDefinition *SsmActionDefinition `json:"SsmActionDefinition,omitempty"`
    
}

