package shared

type ListAssociatedAssetsResponse struct {
	AssetSummaries []AssociatedAssetsSummary `json:"assetSummaries"`
	NextToken      *string                   `json:"nextToken"`
}
