package shared

type CreatePresetResponse struct {
	Preset  *Preset `json:"Preset"`
	Warning *string `json:"Warning"`
}
