package shared

// MergeHunkDetail
// Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.
type MergeHunkDetail struct {
	EndLine     *int64  `json:"endLine,omitempty"`
	HunkContent *string `json:"hunkContent,omitempty"`
	StartLine   *int64  `json:"startLine,omitempty"`
}
