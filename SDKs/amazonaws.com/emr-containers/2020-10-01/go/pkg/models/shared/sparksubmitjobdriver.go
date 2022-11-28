package shared

// SparkSubmitJobDriver
// The information about job driver for Spark submit.
type SparkSubmitJobDriver struct {
	EntryPoint            string   `json:"entryPoint"`
	EntryPointArguments   []string `json:"entryPointArguments,omitempty"`
	SparkSubmitParameters *string  `json:"sparkSubmitParameters,omitempty"`
}
