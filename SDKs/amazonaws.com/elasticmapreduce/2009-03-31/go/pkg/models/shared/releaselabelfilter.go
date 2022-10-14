package shared

type ReleaseLabelFilter struct {
	Application *string `json:"Application,omitempty"`
	Prefix      *string `json:"Prefix,omitempty"`
}
