package shared

// BatchListAttachedIndicesResponse
// Represents the output of a <a>ListAttachedIndices</a> response operation.
type BatchListAttachedIndicesResponse struct {
	IndexAttachments []IndexAttachment `json:"IndexAttachments,omitempty"`
	NextToken        *string           `json:"NextToken,omitempty"`
}
