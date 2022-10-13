package shared

type ListResourcesResult struct {
	NextToken *string    `json:"nextToken"`
	Resources []Resource `json:"resources"`
}
