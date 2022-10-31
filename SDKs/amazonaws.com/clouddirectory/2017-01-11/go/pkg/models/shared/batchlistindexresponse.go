package shared

type BatchListIndexResponse struct {
	IndexAttachments []IndexAttachment `json:"IndexAttachments,omitempty"`
	NextToken        *string           `json:"NextToken,omitempty"`
}
