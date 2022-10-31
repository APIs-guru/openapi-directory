package shared

type DescribeConnectionLoaRequest struct {
	ConnectionID   string              `json:"connectionId"`
	LoaContentType *LoaContentTypeEnum `json:"loaContentType,omitempty"`
	ProviderName   *string             `json:"providerName,omitempty"`
}
