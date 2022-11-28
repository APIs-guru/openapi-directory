package shared

// Configuration
// A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.
type Configuration struct {
	Classification string          `json:"classification"`
	Configurations []Configuration `json:"configurations,omitempty"`
	Properties     *interface{}    `json:"properties,omitempty"`
}
