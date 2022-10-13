package shared

type Definition struct {
	IamActionDefinition *IamActionDefinition `json:"IamActionDefinition"`
	ScpActionDefinition *ScpActionDefinition `json:"ScpActionDefinition"`
	SsmActionDefinition *SsmActionDefinition `json:"SsmActionDefinition"`
}
