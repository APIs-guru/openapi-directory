package shared

type Configuration struct {
	Classification string          `json:"classification"`
	Configurations []Configuration `json:"configurations"`
	Properties     *interface{}    `json:"properties"`
}
