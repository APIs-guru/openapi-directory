package shared

type GetLifecyclePolicyPreviewResponse struct {
	LifecyclePolicyText *string                           `json:"lifecyclePolicyText"`
	NextToken           *string                           `json:"nextToken"`
	PreviewResults      []LifecyclePolicyPreviewResult    `json:"previewResults"`
	RegistryID          *string                           `json:"registryId"`
	RepositoryName      *string                           `json:"repositoryName"`
	Status              *LifecyclePolicyPreviewStatusEnum `json:"status"`
	Summary             *LifecyclePolicyPreviewSummary    `json:"summary"`
}
