package shared

type UpdateApplicationInput struct {
	ApplicationName    *string `json:"applicationName"`
	NewApplicationName *string `json:"newApplicationName"`
}
