package shared

// RulesPackage
// Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action.
type RulesPackage struct {
	Arn         string  `json:"arn"`
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
	Provider    string  `json:"provider"`
	Version     string  `json:"version"`
}
