package shared

// BatchListIndexResponse
// Represents the output of a <a>ListIndex</a> response operation.
type BatchListIndexResponse struct {
	IndexAttachments []IndexAttachment `json:"IndexAttachments,omitempty"`
	NextToken        *string           `json:"NextToken,omitempty"`
}
