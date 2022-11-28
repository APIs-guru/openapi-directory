package shared

// ScpActionDefinition
//
//	The service control policies (SCP) action definition details.
type ScpActionDefinition struct {
	PolicyID  string   `json:"PolicyId"`
	TargetIds []string `json:"TargetIds"`
}
