package shared

type BatchListAttachedIndicesResponse struct {
	IndexAttachments []IndexAttachment `json:"IndexAttachments"`
	NextToken        *string           `json:"NextToken"`
}
