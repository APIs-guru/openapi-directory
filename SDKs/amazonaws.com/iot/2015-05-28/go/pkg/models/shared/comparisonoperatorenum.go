package shared




type ComparisonOperatorEnum string

const (
    ComparisonOperatorEnumLessThan ComparisonOperatorEnum = "less-than"
ComparisonOperatorEnumLessThanEquals ComparisonOperatorEnum = "less-than-equals"
ComparisonOperatorEnumGreaterThan ComparisonOperatorEnum = "greater-than"
ComparisonOperatorEnumGreaterThanEquals ComparisonOperatorEnum = "greater-than-equals"
ComparisonOperatorEnumInCidrSet ComparisonOperatorEnum = "in-cidr-set"
ComparisonOperatorEnumNotInCidrSet ComparisonOperatorEnum = "not-in-cidr-set"
ComparisonOperatorEnumInPortSet ComparisonOperatorEnum = "in-port-set"
ComparisonOperatorEnumNotInPortSet ComparisonOperatorEnum = "not-in-port-set"
ComparisonOperatorEnumInSet ComparisonOperatorEnum = "in-set"
ComparisonOperatorEnumNotInSet ComparisonOperatorEnum = "not-in-set"
)


