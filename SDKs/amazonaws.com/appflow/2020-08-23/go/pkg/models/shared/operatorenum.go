package shared

type OperatorEnum string

const (
	OperatorEnumProjection           OperatorEnum = "PROJECTION"
	OperatorEnumLessThan             OperatorEnum = "LESS_THAN"
	OperatorEnumGreaterThan          OperatorEnum = "GREATER_THAN"
	OperatorEnumContains             OperatorEnum = "CONTAINS"
	OperatorEnumBetween              OperatorEnum = "BETWEEN"
	OperatorEnumLessThanOrEqualTo    OperatorEnum = "LESS_THAN_OR_EQUAL_TO"
	OperatorEnumGreaterThanOrEqualTo OperatorEnum = "GREATER_THAN_OR_EQUAL_TO"
	OperatorEnumEqualTo              OperatorEnum = "EQUAL_TO"
	OperatorEnumNotEqualTo           OperatorEnum = "NOT_EQUAL_TO"
	OperatorEnumAddition             OperatorEnum = "ADDITION"
	OperatorEnumMultiplication       OperatorEnum = "MULTIPLICATION"
	OperatorEnumDivision             OperatorEnum = "DIVISION"
	OperatorEnumSubtraction          OperatorEnum = "SUBTRACTION"
	OperatorEnumMaskAll              OperatorEnum = "MASK_ALL"
	OperatorEnumMaskFirstN           OperatorEnum = "MASK_FIRST_N"
	OperatorEnumMaskLastN            OperatorEnum = "MASK_LAST_N"
	OperatorEnumValidateNonNull      OperatorEnum = "VALIDATE_NON_NULL"
	OperatorEnumValidateNonZero      OperatorEnum = "VALIDATE_NON_ZERO"
	OperatorEnumValidateNonNegative  OperatorEnum = "VALIDATE_NON_NEGATIVE"
	OperatorEnumValidateNumeric      OperatorEnum = "VALIDATE_NUMERIC"
	OperatorEnumNoOp                 OperatorEnum = "NO_OP"
)
