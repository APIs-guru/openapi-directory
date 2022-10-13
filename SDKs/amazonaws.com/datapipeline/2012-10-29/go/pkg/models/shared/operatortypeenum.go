package shared

type OperatorTypeEnum string

const (
	OperatorTypeEnumEq      OperatorTypeEnum = "EQ"
	OperatorTypeEnumRefEq   OperatorTypeEnum = "REF_EQ"
	OperatorTypeEnumLe      OperatorTypeEnum = "LE"
	OperatorTypeEnumGe      OperatorTypeEnum = "GE"
	OperatorTypeEnumBetween OperatorTypeEnum = "BETWEEN"
)
