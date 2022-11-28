package shared

// MergeHunk
// Information about merge hunks in a merge or pull request operation.
type MergeHunk struct {
	Base        *MergeHunkDetail `json:"base,omitempty"`
	Destination *MergeHunkDetail `json:"destination,omitempty"`
	IsConflict  *bool            `json:"isConflict,omitempty"`
	Source      *MergeHunkDetail `json:"source,omitempty"`
}
