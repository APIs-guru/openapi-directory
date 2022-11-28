package shared

// SsmActionDefinition
//
//	The AWS Systems Manager (SSM) action definition details.
type SsmActionDefinition struct {
	ActionSubType ActionSubTypeEnum `json:"ActionSubType"`
	InstanceIds   []string          `json:"InstanceIds"`
	Region        string            `json:"Region"`
}
