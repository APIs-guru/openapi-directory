package shared

type DescribeInterconnectLoaRequest struct {
	InterconnectID string              `json:"interconnectId"`
	LoaContentType *LoaContentTypeEnum `json:"loaContentType,omitempty"`
	ProviderName   *string             `json:"providerName,omitempty"`
}
