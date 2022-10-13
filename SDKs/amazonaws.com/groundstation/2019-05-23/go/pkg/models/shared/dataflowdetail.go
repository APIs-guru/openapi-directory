package shared

type DataflowDetail struct {
	Destination  *Destination `json:"destination"`
	ErrorMessage *string      `json:"errorMessage"`
	Source       *Source      `json:"source"`
}
