package shared

// FileModes
// Information about file modes in a merge or pull request.
type FileModes struct {
	Base        *FileModeTypeEnumEnum `json:"base,omitempty"`
	Destination *FileModeTypeEnumEnum `json:"destination,omitempty"`
	Source      *FileModeTypeEnumEnum `json:"source,omitempty"`
}
