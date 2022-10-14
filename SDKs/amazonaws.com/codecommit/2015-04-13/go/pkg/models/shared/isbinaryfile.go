package shared

type IsBinaryFile struct {
	Base        *bool `json:"base,omitempty"`
	Destination *bool `json:"destination,omitempty"`
	Source      *bool `json:"source,omitempty"`
}
