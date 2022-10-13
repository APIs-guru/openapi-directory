package shared

type CreateStackRequest struct {
	AccessEndpoints     []AccessEndpoint     `json:"AccessEndpoints"`
	ApplicationSettings *ApplicationSettings `json:"ApplicationSettings"`
	Description         *string              `json:"Description"`
	DisplayName         *string              `json:"DisplayName"`
	EmbedHostDomains    []string             `json:"EmbedHostDomains"`
	FeedbackURL         *string              `json:"FeedbackURL"`
	Name                string               `json:"Name"`
	RedirectURL         *string              `json:"RedirectURL"`
	StorageConnectors   []StorageConnector   `json:"StorageConnectors"`
	Tags                map[string]string    `json:"Tags"`
	UserSettings        []UserSetting        `json:"UserSettings"`
}
