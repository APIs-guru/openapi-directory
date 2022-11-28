package shared

// ExecutionEngineConfig
// Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an EMR cluster.
type ExecutionEngineConfig struct {
	ID                            string                   `json:"Id"`
	MasterInstanceSecurityGroupID *string                  `json:"MasterInstanceSecurityGroupId,omitempty"`
	Type                          *ExecutionEngineTypeEnum `json:"Type,omitempty"`
}
