package shared

type UpdateApplicationRequest struct {
	ConfigurationID string  `json:"configurationId"`
	Description     *string `json:"description"`
	Name            *string `json:"name"`
}
