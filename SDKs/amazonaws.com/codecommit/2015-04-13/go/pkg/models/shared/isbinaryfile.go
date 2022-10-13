package shared

type IsBinaryFile struct {
	Base        *bool `json:"base"`
	Destination *bool `json:"destination"`
	Source      *bool `json:"source"`
}
