package shared

type UpdateApplicationInput struct {
	ApplicationName    *string `json:"applicationName,omitempty"`
	NewApplicationName *string `json:"newApplicationName,omitempty"`
}
