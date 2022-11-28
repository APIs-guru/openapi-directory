package shared

// AnalyzedResourceSummary
// Contains the ARN of the analyzed resource.
type AnalyzedResourceSummary struct {
	ResourceArn          string           `json:"resourceArn"`
	ResourceOwnerAccount string           `json:"resourceOwnerAccount"`
	ResourceType         ResourceTypeEnum `json:"resourceType"`
}
