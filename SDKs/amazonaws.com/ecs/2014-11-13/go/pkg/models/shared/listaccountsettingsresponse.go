package shared

type ListAccountSettingsResponse struct {
	NextToken *string   `json:"nextToken,omitempty"`
	Settings  []Setting `json:"settings,omitempty"`
}
