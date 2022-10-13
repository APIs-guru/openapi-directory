package shared

type DescribeInterconnectLoaRequest struct {
	InterconnectID string              `json:"interconnectId"`
	LoaContentType *LoaContentTypeEnum `json:"loaContentType"`
	ProviderName   *string             `json:"providerName"`
}
