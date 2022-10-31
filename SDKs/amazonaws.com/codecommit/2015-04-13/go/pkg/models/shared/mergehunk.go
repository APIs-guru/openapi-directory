package shared

type MergeHunk struct {
	Base        *MergeHunkDetail `json:"base,omitempty"`
	Destination *MergeHunkDetail `json:"destination,omitempty"`
	IsConflict  *bool            `json:"isConflict,omitempty"`
	Source      *MergeHunkDetail `json:"source,omitempty"`
}
