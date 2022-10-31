package shared

type StepConfig struct {
	ActionOnFailure *ActionOnFailureEnum `json:"ActionOnFailure,omitempty"`
	HadoopJarStep   HadoopJarStepConfig  `json:"HadoopJarStep"`
	Name            string               `json:"Name"`
}
