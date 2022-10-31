package shared

type ListAppsListsResponse struct {
	AppsLists []AppsListDataSummary `json:"AppsLists,omitempty"`
	NextToken *string               `json:"NextToken,omitempty"`
}
