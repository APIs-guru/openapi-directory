package shared

type ListAssetModelsResponse struct {
	AssetModelSummaries []AssetModelSummary `json:"assetModelSummaries"`
	NextToken           *string             `json:"nextToken"`
}
