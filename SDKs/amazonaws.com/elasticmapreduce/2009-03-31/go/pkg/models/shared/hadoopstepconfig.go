package shared

type HadoopStepConfig struct {
	Args       []string          `json:"Args"`
	Jar        *string           `json:"Jar"`
	MainClass  *string           `json:"MainClass"`
	Properties map[string]string `json:"Properties"`
}
