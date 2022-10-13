package shared

type MergeHunkDetail struct {
	EndLine     *int64  `json:"endLine"`
	HunkContent *string `json:"hunkContent"`
	StartLine   *int64  `json:"startLine"`
}
