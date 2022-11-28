package shared

// DeleteDatasetResponse
// Response to a successful DeleteDataset request.
type DeleteDatasetResponse struct {
	Dataset *Dataset `json:"Dataset,omitempty"`
}
