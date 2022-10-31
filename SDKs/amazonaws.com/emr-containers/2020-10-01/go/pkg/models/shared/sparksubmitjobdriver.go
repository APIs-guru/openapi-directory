package shared



type SparkSubmitJobDriver struct {
    EntryPoint string `json:"entryPoint"`
    EntryPointArguments []string `json:"entryPointArguments,omitempty"`
    SparkSubmitParameters *string `json:"sparkSubmitParameters,omitempty"`
    
}

