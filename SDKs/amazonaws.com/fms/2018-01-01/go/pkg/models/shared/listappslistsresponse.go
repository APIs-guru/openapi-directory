package shared

type ListAppsListsResponse struct {
	AppsLists []AppsListDataSummary `json:"AppsLists"`
	NextToken *string               `json:"NextToken"`
}
