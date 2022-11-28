package shared

// DescribeDatasetResponse
// Response to a successful DescribeDataset request.
type DescribeDatasetResponse struct {
	Dataset *Dataset `json:"Dataset,omitempty"`
}
