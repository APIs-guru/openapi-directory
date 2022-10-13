package shared

type Configuration struct {
	Classification *string           `json:"Classification"`
	Configurations []Configuration   `json:"Configurations"`
	Properties     map[string]string `json:"Properties"`
}
