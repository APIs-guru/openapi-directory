package shared




type RuleOperatorEnum string

const (
    RuleOperatorEnumEquals RuleOperatorEnum = "EQUALS"
RuleOperatorEnumLessThan RuleOperatorEnum = "LESS_THAN"
RuleOperatorEnumLessThanOrEquals RuleOperatorEnum = "LESS_THAN_OR_EQUALS"
RuleOperatorEnumGreaterThan RuleOperatorEnum = "GREATER_THAN"
RuleOperatorEnumGreaterThanOrEquals RuleOperatorEnum = "GREATER_THAN_OR_EQUALS"
RuleOperatorEnumIn RuleOperatorEnum = "IN"
RuleOperatorEnumNotIn RuleOperatorEnum = "NOT_IN"
RuleOperatorEnumContains RuleOperatorEnum = "CONTAINS"
)


