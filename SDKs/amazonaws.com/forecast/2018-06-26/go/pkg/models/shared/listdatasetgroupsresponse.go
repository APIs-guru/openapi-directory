package shared

type ListDatasetGroupsResponse struct {
	DatasetGroups []DatasetGroupSummary `json:"DatasetGroups"`
	NextToken     *string               `json:"NextToken"`
}
