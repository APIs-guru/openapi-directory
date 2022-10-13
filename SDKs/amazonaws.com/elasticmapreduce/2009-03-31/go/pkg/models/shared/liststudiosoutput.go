package shared

type ListStudiosOutput struct {
	Marker  *string         `json:"Marker"`
	Studios []StudioSummary `json:"Studios"`
}
