package shared

type FileSizes struct {
	Base        *int64 `json:"base"`
	Destination *int64 `json:"destination"`
	Source      *int64 `json:"source"`
}
