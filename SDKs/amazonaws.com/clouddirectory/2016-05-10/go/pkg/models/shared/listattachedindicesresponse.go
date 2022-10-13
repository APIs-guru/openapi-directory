package shared

type ListAttachedIndicesResponse struct {
	IndexAttachments []IndexAttachment `json:"IndexAttachments"`
	NextToken        *string           `json:"NextToken"`
}
