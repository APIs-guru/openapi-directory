package shared

type DescribeRulesPackagesRequest struct {
	Locale           *LocaleEnum `json:"locale,omitempty"`
	RulesPackageArns []string    `json:"rulesPackageArns"`
}
