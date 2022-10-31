package shared

type Configuration struct {
	Classification *string           `json:"Classification,omitempty"`
	Configurations []Configuration   `json:"Configurations,omitempty"`
	Properties     map[string]string `json:"Properties,omitempty"`
}
