package shared

// Configuration
// <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>
type Configuration struct {
	Classification *string           `json:"Classification,omitempty"`
	Configurations []Configuration   `json:"Configurations,omitempty"`
	Properties     map[string]string `json:"Properties,omitempty"`
}
