package shared

// FunctionConfiguration
// The configuration of the Lambda function.
type FunctionConfiguration struct {
	EncodingType *EncodingTypeEnum                 `json:"EncodingType,omitempty"`
	Environment  *FunctionConfigurationEnvironment `json:"Environment,omitempty"`
	ExecArgs     *string                           `json:"ExecArgs,omitempty"`
	Executable   *string                           `json:"Executable,omitempty"`
	MemorySize   *int64                            `json:"MemorySize,omitempty"`
	Pinned       *bool                             `json:"Pinned,omitempty"`
	Timeout      *int64                            `json:"Timeout,omitempty"`
}
