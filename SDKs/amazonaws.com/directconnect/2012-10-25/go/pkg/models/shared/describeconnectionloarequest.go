package shared

type DescribeConnectionLoaRequest struct {
	ConnectionID   string              `json:"connectionId"`
	LoaContentType *LoaContentTypeEnum `json:"loaContentType"`
	ProviderName   *string             `json:"providerName"`
}
