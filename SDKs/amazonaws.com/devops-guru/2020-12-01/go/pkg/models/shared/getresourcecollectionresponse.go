package shared

type GetResourceCollectionResponse struct {
	NextToken          *string                   `json:"NextToken"`
	ResourceCollection *ResourceCollectionFilter `json:"ResourceCollection"`
}
