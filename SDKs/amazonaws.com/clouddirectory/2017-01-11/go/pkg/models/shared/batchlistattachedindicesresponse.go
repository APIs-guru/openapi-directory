package shared

type BatchListAttachedIndicesResponse struct {
	IndexAttachments []IndexAttachment `json:"IndexAttachments,omitempty"`
	NextToken        *string           `json:"NextToken,omitempty"`
}
