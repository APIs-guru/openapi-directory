package shared

// SupportedProductConfig
// The list of supported product configurations that allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.
type SupportedProductConfig struct {
	Args []string `json:"Args,omitempty"`
	Name *string  `json:"Name,omitempty"`
}
