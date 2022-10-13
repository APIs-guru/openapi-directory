package shared

type StepConfig struct {
	ActionOnFailure *ActionOnFailureEnum `json:"ActionOnFailure"`
	HadoopJarStep   HadoopJarStepConfig  `json:"HadoopJarStep"`
	Name            string               `json:"Name"`
}
