package shared

// StepConfig
// Specification for a cluster (job flow) step.
type StepConfig struct {
	ActionOnFailure *ActionOnFailureEnum `json:"ActionOnFailure,omitempty"`
	HadoopJarStep   HadoopJarStepConfig  `json:"HadoopJarStep"`
	Name            string               `json:"Name"`
}
