package shared

type DescribeLoaRequest struct {
	ConnectionID   string              `json:"connectionId"`
	LoaContentType *LoaContentTypeEnum `json:"loaContentType,omitempty"`
	ProviderName   *string             `json:"providerName,omitempty"`
}
