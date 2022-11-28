package shared

// Definition
//
//	Specifies all of the type-specific parameters.
type Definition struct {
	IamActionDefinition *IamActionDefinition `json:"IamActionDefinition,omitempty"`
	ScpActionDefinition *ScpActionDefinition `json:"ScpActionDefinition,omitempty"`
	SsmActionDefinition *SsmActionDefinition `json:"SsmActionDefinition,omitempty"`
}
