package shared

type CreateStackRequest struct {
	AccessEndpoints     []AccessEndpoint     `json:"AccessEndpoints,omitempty"`
	ApplicationSettings *ApplicationSettings `json:"ApplicationSettings,omitempty"`
	Description         *string              `json:"Description,omitempty"`
	DisplayName         *string              `json:"DisplayName,omitempty"`
	EmbedHostDomains    []string             `json:"EmbedHostDomains,omitempty"`
	FeedbackURL         *string              `json:"FeedbackURL,omitempty"`
	Name                string               `json:"Name"`
	RedirectURL         *string              `json:"RedirectURL,omitempty"`
	StorageConnectors   []StorageConnector   `json:"StorageConnectors,omitempty"`
	Tags                map[string]string    `json:"Tags,omitempty"`
	UserSettings        []UserSetting        `json:"UserSettings,omitempty"`
}
