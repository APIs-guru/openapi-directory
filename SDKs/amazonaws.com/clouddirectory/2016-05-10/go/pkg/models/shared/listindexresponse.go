package shared

type ListIndexResponse struct {
	IndexAttachments []IndexAttachment `json:"IndexAttachments"`
	NextToken        *string           `json:"NextToken"`
}
