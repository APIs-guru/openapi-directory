package shared

type OperatorEnum string

const (
	OperatorEnumEquals             OperatorEnum = "Equals"
	OperatorEnumNotEquals          OperatorEnum = "NotEquals"
	OperatorEnumIn                 OperatorEnum = "In"
	OperatorEnumLessThanOrEqual    OperatorEnum = "LessThanOrEqual"
	OperatorEnumLessThan           OperatorEnum = "LessThan"
	OperatorEnumGreaterThanOrEqual OperatorEnum = "GreaterThanOrEqual"
	OperatorEnumGreaterThan        OperatorEnum = "GreaterThan"
	OperatorEnumContains           OperatorEnum = "Contains"
	OperatorEnumNotContains        OperatorEnum = "NotContains"
	OperatorEnumBeginsWith         OperatorEnum = "BeginsWith"
)
