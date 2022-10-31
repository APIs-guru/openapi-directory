package shared

type FileSizes struct {
	Base        *int64 `json:"base,omitempty"`
	Destination *int64 `json:"destination,omitempty"`
	Source      *int64 `json:"source,omitempty"`
}
