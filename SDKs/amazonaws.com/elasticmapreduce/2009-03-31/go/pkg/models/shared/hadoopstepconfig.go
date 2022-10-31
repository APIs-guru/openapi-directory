package shared



type HadoopStepConfig struct {
    Args []string `json:"Args,omitempty"`
    Jar *string `json:"Jar,omitempty"`
    MainClass *string `json:"MainClass,omitempty"`
    Properties map[string]string `json:"Properties,omitempty"`
    
}

