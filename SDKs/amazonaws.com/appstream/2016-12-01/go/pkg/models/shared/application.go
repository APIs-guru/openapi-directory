package shared

type Application struct {
	DisplayName      *string           `json:"DisplayName"`
	Enabled          *bool             `json:"Enabled"`
	IconURL          *string           `json:"IconURL"`
	LaunchParameters *string           `json:"LaunchParameters"`
	LaunchPath       *string           `json:"LaunchPath"`
	Metadata         map[string]string `json:"Metadata"`
	Name             *string           `json:"Name"`
}
