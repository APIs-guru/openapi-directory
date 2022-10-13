package shared

type ListAccountSettingsResponse struct {
	NextToken *string   `json:"nextToken"`
	Settings  []Setting `json:"settings"`
}
