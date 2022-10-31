package shared

type ListAssetsResponse struct {
	AssetSummaries []AssetSummary `json:"assetSummaries"`
	NextToken      *string        `json:"nextToken,omitempty"`
}
