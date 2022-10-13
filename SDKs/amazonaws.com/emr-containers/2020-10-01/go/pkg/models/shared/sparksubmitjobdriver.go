package shared

type SparkSubmitJobDriver struct {
	EntryPoint            string   `json:"entryPoint"`
	EntryPointArguments   []string `json:"entryPointArguments"`
	SparkSubmitParameters *string  `json:"sparkSubmitParameters"`
}
