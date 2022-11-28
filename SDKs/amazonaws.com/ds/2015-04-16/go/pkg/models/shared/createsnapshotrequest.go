package shared

// CreateSnapshotRequest
// Contains the inputs for the <a>CreateSnapshot</a> operation.
type CreateSnapshotRequest struct {
	DirectoryID string  `json:"DirectoryId"`
	Name        *string `json:"Name,omitempty"`
}
