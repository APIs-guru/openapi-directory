package shared

type GetFileOutput struct {
	BlobID      string               `json:"blobId"`
	CommitID    string               `json:"commitId"`
	FileContent string               `json:"fileContent"`
	FileMode    FileModeTypeEnumEnum `json:"fileMode"`
	FilePath    string               `json:"filePath"`
	FileSize    int64                `json:"fileSize"`
}
