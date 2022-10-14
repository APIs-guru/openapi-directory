package shared

type ExecutionEngineConfig struct {
	ID                            string                   `json:"Id"`
	MasterInstanceSecurityGroupID *string                  `json:"MasterInstanceSecurityGroupId,omitempty"`
	Type                          *ExecutionEngineTypeEnum `json:"Type,omitempty"`
}
