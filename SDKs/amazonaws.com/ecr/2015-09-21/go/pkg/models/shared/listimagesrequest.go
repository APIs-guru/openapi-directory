package shared

type ListImagesRequest struct {
	Filter         *ListImagesFilter `json:"filter"`
	MaxResults     *int64            `json:"maxResults"`
	NextToken      *string           `json:"nextToken"`
	RegistryID     *string           `json:"registryId"`
	RepositoryName string            `json:"repositoryName"`
}
