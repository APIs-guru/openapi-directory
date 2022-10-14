package shared

type ListRulesPackagesResponse struct {
	NextToken        *string  `json:"nextToken,omitempty"`
	RulesPackageArns []string `json:"rulesPackageArns"`
}
