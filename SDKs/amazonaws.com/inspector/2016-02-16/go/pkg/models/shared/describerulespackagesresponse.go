package shared

type DescribeRulesPackagesResponse struct {
	FailedItems   map[string]FailedItemDetails `json:"failedItems"`
	RulesPackages []RulesPackage               `json:"rulesPackages"`
}
