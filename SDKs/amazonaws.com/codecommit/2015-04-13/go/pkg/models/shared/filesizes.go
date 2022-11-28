package shared

// FileSizes
// Information about the size of files in a merge or pull request.
type FileSizes struct {
	Base        *int64 `json:"base,omitempty"`
	Destination *int64 `json:"destination,omitempty"`
	Source      *int64 `json:"source,omitempty"`
}
