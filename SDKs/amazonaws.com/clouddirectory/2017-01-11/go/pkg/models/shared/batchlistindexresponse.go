package shared

type BatchListIndexResponse struct {
	IndexAttachments []IndexAttachment `json:"IndexAttachments"`
	NextToken        *string           `json:"NextToken"`
}
