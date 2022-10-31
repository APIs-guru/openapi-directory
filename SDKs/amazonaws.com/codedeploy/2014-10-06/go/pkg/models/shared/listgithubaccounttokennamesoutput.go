package shared



type ListGitHubAccountTokenNamesOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    TokenNameList []string `json:"tokenNameList,omitempty"`
    
}

