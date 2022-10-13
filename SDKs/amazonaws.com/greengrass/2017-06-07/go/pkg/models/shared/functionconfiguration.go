package shared

type FunctionConfiguration struct {
	EncodingType *EncodingTypeEnum                 `json:"EncodingType"`
	Environment  *FunctionConfigurationEnvironment `json:"Environment"`
	ExecArgs     *string                           `json:"ExecArgs"`
	Executable   *string                           `json:"Executable"`
	MemorySize   *int64                            `json:"MemorySize"`
	Pinned       *bool                             `json:"Pinned"`
	Timeout      *int64                            `json:"Timeout"`
}
