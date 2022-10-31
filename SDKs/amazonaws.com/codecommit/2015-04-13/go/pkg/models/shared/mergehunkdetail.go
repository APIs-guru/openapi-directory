package shared

type MergeHunkDetail struct {
	EndLine     *int64  `json:"endLine,omitempty"`
	HunkContent *string `json:"hunkContent,omitempty"`
	StartLine   *int64  `json:"startLine,omitempty"`
}
