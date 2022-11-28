package shared

// OtaUpdateFile
// Describes a file to be associated with an OTA update.
type OtaUpdateFile struct {
	Attributes   map[string]string `json:"attributes,omitempty"`
	CodeSigning  *CodeSigning      `json:"codeSigning,omitempty"`
	FileLocation *FileLocation     `json:"fileLocation,omitempty"`
	FileName     *string           `json:"fileName,omitempty"`
	FileType     *int64            `json:"fileType,omitempty"`
	FileVersion  *string           `json:"fileVersion,omitempty"`
}
