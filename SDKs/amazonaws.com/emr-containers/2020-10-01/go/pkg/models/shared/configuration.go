package shared



type Configuration struct {
    Classification string `json:"classification"`
    Configurations []Configuration `json:"configurations,omitempty"`
    Properties *interface{} `json:"properties,omitempty"`
    
}

