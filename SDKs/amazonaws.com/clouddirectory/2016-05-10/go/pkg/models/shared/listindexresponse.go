package shared

type ListIndexResponse struct {
	IndexAttachments []IndexAttachment `json:"IndexAttachments,omitempty"`
	NextToken        *string           `json:"NextToken,omitempty"`
}
