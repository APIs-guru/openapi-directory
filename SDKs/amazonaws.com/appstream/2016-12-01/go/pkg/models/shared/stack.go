package shared

import (
	"time"
)

// Stack
// Describes a stack.
type Stack struct {
	AccessEndpoints     []AccessEndpoint             `json:"AccessEndpoints,omitempty"`
	ApplicationSettings *ApplicationSettingsResponse `json:"ApplicationSettings,omitempty"`
	Arn                 *string                      `json:"Arn,omitempty"`
	CreatedTime         *time.Time                   `json:"CreatedTime,omitempty"`
	Description         *string                      `json:"Description,omitempty"`
	DisplayName         *string                      `json:"DisplayName,omitempty"`
	EmbedHostDomains    []string                     `json:"EmbedHostDomains,omitempty"`
	FeedbackURL         *string                      `json:"FeedbackURL,omitempty"`
	Name                string                       `json:"Name"`
	RedirectURL         *string                      `json:"RedirectURL,omitempty"`
	StackErrors         []StackError                 `json:"StackErrors,omitempty"`
	StorageConnectors   []StorageConnector           `json:"StorageConnectors,omitempty"`
	UserSettings        []UserSetting                `json:"UserSettings,omitempty"`
}
