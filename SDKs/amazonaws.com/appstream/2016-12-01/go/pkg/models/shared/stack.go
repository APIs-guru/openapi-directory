package shared

import (
	"time"
)

type Stack struct {
	AccessEndpoints     []AccessEndpoint             `json:"AccessEndpoints"`
	ApplicationSettings *ApplicationSettingsResponse `json:"ApplicationSettings"`
	Arn                 *string                      `json:"Arn"`
	CreatedTime         *time.Time                   `json:"CreatedTime"`
	Description         *string                      `json:"Description"`
	DisplayName         *string                      `json:"DisplayName"`
	EmbedHostDomains    []string                     `json:"EmbedHostDomains"`
	FeedbackURL         *string                      `json:"FeedbackURL"`
	Name                string                       `json:"Name"`
	RedirectURL         *string                      `json:"RedirectURL"`
	StackErrors         []StackError                 `json:"StackErrors"`
	StorageConnectors   []StorageConnector           `json:"StorageConnectors"`
	UserSettings        []UserSetting                `json:"UserSettings"`
}
