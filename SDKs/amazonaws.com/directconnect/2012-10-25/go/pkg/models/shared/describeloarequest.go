package shared

type DescribeLoaRequest struct {
	ConnectionID   string              `json:"connectionId"`
	LoaContentType *LoaContentTypeEnum `json:"loaContentType"`
	ProviderName   *string             `json:"providerName"`
}
