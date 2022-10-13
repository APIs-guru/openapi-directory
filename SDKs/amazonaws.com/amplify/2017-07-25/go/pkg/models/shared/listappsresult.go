package shared

type ListAppsResult struct {
	Apps      []App   `json:"apps"`
	NextToken *string `json:"nextToken"`
}
