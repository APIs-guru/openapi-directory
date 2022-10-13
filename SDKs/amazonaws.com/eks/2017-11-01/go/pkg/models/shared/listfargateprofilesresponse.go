package shared

type ListFargateProfilesResponse struct {
	FargateProfileNames []string `json:"fargateProfileNames"`
	NextToken           *string  `json:"nextToken"`
}
