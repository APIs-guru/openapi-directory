package shared

type ListFargateProfilesResponse struct {
	FargateProfileNames []string `json:"fargateProfileNames,omitempty"`
	NextToken           *string  `json:"nextToken,omitempty"`
}
