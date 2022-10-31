package shared



type HadoopJarStepConfig struct {
    Args []string `json:"Args,omitempty"`
    Jar string `json:"Jar"`
    MainClass *string `json:"MainClass,omitempty"`
    Properties []KeyValue `json:"Properties,omitempty"`
    
}

