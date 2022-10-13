package shared

type UpdateStackRequest struct {
	AccessEndpoints         []AccessEndpoint     `json:"AccessEndpoints"`
	ApplicationSettings     *ApplicationSettings `json:"ApplicationSettings"`
	AttributesToDelete      []StackAttributeEnum `json:"AttributesToDelete"`
	DeleteStorageConnectors *bool                `json:"DeleteStorageConnectors"`
	Description             *string              `json:"Description"`
	DisplayName             *string              `json:"DisplayName"`
	EmbedHostDomains        []string             `json:"EmbedHostDomains"`
	FeedbackURL             *string              `json:"FeedbackURL"`
	Name                    string               `json:"Name"`
	RedirectURL             *string              `json:"RedirectURL"`
	StorageConnectors       []StorageConnector   `json:"StorageConnectors"`
	UserSettings            []UserSetting        `json:"UserSettings"`
}
