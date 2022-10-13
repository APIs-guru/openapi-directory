package shared

type ListTagsResponse struct {
	NextToken       *string       `json:"NextToken"`
	ResourceTagList []ResourceTag `json:"ResourceTagList"`
}
