package shared

type SourceFileSpecifier struct {
	FilePath string `json:"filePath"`
	IsMove   *bool  `json:"isMove"`
}
