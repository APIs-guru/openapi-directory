package shared

// Application
// Describes an application in the application catalog.
type Application struct {
	DisplayName      *string           `json:"DisplayName,omitempty"`
	Enabled          *bool             `json:"Enabled,omitempty"`
	IconURL          *string           `json:"IconURL,omitempty"`
	LaunchParameters *string           `json:"LaunchParameters,omitempty"`
	LaunchPath       *string           `json:"LaunchPath,omitempty"`
	Metadata         map[string]string `json:"Metadata,omitempty"`
	Name             *string           `json:"Name,omitempty"`
}
