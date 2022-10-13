package shared

type DescribeRulesPackagesRequest struct {
	Locale           *LocaleEnum `json:"locale"`
	RulesPackageArns []string    `json:"rulesPackageArns"`
}
