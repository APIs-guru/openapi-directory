package shared

type ReleaseLabelFilter struct {
	Application *string `json:"Application"`
	Prefix      *string `json:"Prefix"`
}
