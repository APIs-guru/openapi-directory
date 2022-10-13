package shared

type ExecutionEngineConfig struct {
	ID                            string                   `json:"Id"`
	MasterInstanceSecurityGroupID *string                  `json:"MasterInstanceSecurityGroupId"`
	Type                          *ExecutionEngineTypeEnum `json:"Type"`
}
