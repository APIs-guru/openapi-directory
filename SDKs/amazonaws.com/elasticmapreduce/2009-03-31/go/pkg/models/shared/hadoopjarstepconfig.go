package shared

type HadoopJarStepConfig struct {
	Args       []string   `json:"Args"`
	Jar        string     `json:"Jar"`
	MainClass  *string    `json:"MainClass"`
	Properties []KeyValue `json:"Properties"`
}
