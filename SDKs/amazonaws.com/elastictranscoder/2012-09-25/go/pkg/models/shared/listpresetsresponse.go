package shared

type ListPresetsResponse struct {
	NextPageToken *string  `json:"NextPageToken"`
	Presets       []Preset `json:"Presets"`
}
