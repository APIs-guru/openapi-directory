package shared

type GetLifecyclePolicyPreviewRequest struct {
	Filter         *LifecyclePolicyPreviewFilter `json:"filter"`
	ImageIds       []ImageIdentifier             `json:"imageIds"`
	MaxResults     *int64                        `json:"maxResults"`
	NextToken      *string                       `json:"nextToken"`
	RegistryID     *string                       `json:"registryId"`
	RepositoryName string                        `json:"repositoryName"`
}
