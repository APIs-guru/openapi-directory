package shared

type ListDatasetGroupsResponse struct {
	DatasetGroups []DatasetGroupSummary `json:"DatasetGroups,omitempty"`
	NextToken     *string               `json:"NextToken,omitempty"`
}
