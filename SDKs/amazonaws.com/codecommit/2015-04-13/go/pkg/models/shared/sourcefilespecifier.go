package shared

// SourceFileSpecifier
// Information about a source file that is part of changes made in a commit.
type SourceFileSpecifier struct {
	FilePath string `json:"filePath"`
	IsMove   *bool  `json:"isMove,omitempty"`
}
