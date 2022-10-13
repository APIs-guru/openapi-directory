package shared

type OtaUpdateFile struct {
	Attributes   map[string]string `json:"attributes"`
	CodeSigning  *CodeSigning      `json:"codeSigning"`
	FileLocation *FileLocation     `json:"fileLocation"`
	FileName     *string           `json:"fileName"`
	FileType     *int64            `json:"fileType"`
	FileVersion  *string           `json:"fileVersion"`
}
