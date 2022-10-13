package shared

type CreateSnapshotRequest struct {
	DirectoryID string  `json:"DirectoryId"`
	Name        *string `json:"Name"`
}
