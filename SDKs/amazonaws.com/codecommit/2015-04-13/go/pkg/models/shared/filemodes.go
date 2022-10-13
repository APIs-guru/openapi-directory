package shared

type FileModes struct {
	Base        *FileModeTypeEnumEnum `json:"base"`
	Destination *FileModeTypeEnumEnum `json:"destination"`
	Source      *FileModeTypeEnumEnum `json:"source"`
}
