package shared

// IsBinaryFile
// Information about whether a file is binary or textual in a merge or pull request operation.
type IsBinaryFile struct {
	Base        *bool `json:"base,omitempty"`
	Destination *bool `json:"destination,omitempty"`
	Source      *bool `json:"source,omitempty"`
}
