package shared

type ListGitHubAccountTokenNamesOutput struct {
	NextToken     *string  `json:"nextToken"`
	TokenNameList []string `json:"tokenNameList"`
}
