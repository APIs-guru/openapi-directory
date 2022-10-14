package shared

type UpdateStackRequest struct {
	AccessEndpoints         []AccessEndpoint     `json:"AccessEndpoints,omitempty"`
	ApplicationSettings     *ApplicationSettings `json:"ApplicationSettings,omitempty"`
	AttributesToDelete      []StackAttributeEnum `json:"AttributesToDelete,omitempty"`
	DeleteStorageConnectors *bool                `json:"DeleteStorageConnectors,omitempty"`
	Description             *string              `json:"Description,omitempty"`
	DisplayName             *string              `json:"DisplayName,omitempty"`
	EmbedHostDomains        []string             `json:"EmbedHostDomains,omitempty"`
	FeedbackURL             *string              `json:"FeedbackURL,omitempty"`
	Name                    string               `json:"Name"`
	RedirectURL             *string              `json:"RedirectURL,omitempty"`
	StorageConnectors       []StorageConnector   `json:"StorageConnectors,omitempty"`
	UserSettings            []UserSetting        `json:"UserSettings,omitempty"`
}
