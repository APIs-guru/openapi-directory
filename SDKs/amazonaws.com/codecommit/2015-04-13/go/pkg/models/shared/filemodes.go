package shared

type FileModes struct {
	Base        *FileModeTypeEnumEnum `json:"base,omitempty"`
	Destination *FileModeTypeEnumEnum `json:"destination,omitempty"`
	Source      *FileModeTypeEnumEnum `json:"source,omitempty"`
}
