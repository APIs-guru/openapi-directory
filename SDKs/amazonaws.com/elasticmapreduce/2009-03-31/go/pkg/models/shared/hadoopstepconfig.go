package shared

// HadoopStepConfig
// A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
type HadoopStepConfig struct {
	Args       []string          `json:"Args,omitempty"`
	Jar        *string           `json:"Jar,omitempty"`
	MainClass  *string           `json:"MainClass,omitempty"`
	Properties map[string]string `json:"Properties,omitempty"`
}
