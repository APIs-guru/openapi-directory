package shared

// Application
// <p>With Amazon EMR release version 4.0 and later, the only accepted parameter is the application name. To pass arguments to applications, you use configuration classifications specified using configuration JSON objects. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p> <p>With earlier Amazon EMR releases, the application is any Amazon or third-party software that you can add to the cluster. This structure contains a list of strings that indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action argument.</p>
type Application struct {
	AdditionalInfo map[string]string `json:"AdditionalInfo,omitempty"`
	Args           []string          `json:"Args,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	Version        *string           `json:"Version,omitempty"`
}
