package shared

// HadoopJarStepConfig
// A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
type HadoopJarStepConfig struct {
	Args       []string   `json:"Args,omitempty"`
	Jar        string     `json:"Jar"`
	MainClass  *string    `json:"MainClass,omitempty"`
	Properties []KeyValue `json:"Properties,omitempty"`
}
