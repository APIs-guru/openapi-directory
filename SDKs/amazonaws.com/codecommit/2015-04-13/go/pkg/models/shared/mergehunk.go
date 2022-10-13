package shared

type MergeHunk struct {
	Base        *MergeHunkDetail `json:"base"`
	Destination *MergeHunkDetail `json:"destination"`
	IsConflict  *bool            `json:"isConflict"`
	Source      *MergeHunkDetail `json:"source"`
}
