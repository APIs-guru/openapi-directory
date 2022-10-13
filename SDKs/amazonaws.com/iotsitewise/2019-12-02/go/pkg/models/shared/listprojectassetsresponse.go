package shared

type ListProjectAssetsResponse struct {
	AssetIds  []string `json:"assetIds"`
	NextToken *string  `json:"nextToken"`
}
