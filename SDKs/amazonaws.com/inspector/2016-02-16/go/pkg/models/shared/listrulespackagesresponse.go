package shared

type ListRulesPackagesResponse struct {
	NextToken        *string  `json:"nextToken"`
	RulesPackageArns []string `json:"rulesPackageArns"`
}
