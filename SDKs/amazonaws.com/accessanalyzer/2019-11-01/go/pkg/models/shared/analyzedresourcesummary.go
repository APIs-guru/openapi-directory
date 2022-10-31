package shared

type AnalyzedResourceSummary struct {
	ResourceArn          string           `json:"resourceArn"`
	ResourceOwnerAccount string           `json:"resourceOwnerAccount"`
	ResourceType         ResourceTypeEnum `json:"resourceType"`
}
