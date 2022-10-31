package shared

type SlackConnectorOperatorEnum string

const (
	SlackConnectorOperatorEnumProjection           SlackConnectorOperatorEnum = "PROJECTION"
	SlackConnectorOperatorEnumLessThan             SlackConnectorOperatorEnum = "LESS_THAN"
	SlackConnectorOperatorEnumGreaterThan          SlackConnectorOperatorEnum = "GREATER_THAN"
	SlackConnectorOperatorEnumBetween              SlackConnectorOperatorEnum = "BETWEEN"
	SlackConnectorOperatorEnumLessThanOrEqualTo    SlackConnectorOperatorEnum = "LESS_THAN_OR_EQUAL_TO"
	SlackConnectorOperatorEnumGreaterThanOrEqualTo SlackConnectorOperatorEnum = "GREATER_THAN_OR_EQUAL_TO"
	SlackConnectorOperatorEnumEqualTo              SlackConnectorOperatorEnum = "EQUAL_TO"
	SlackConnectorOperatorEnumAddition             SlackConnectorOperatorEnum = "ADDITION"
	SlackConnectorOperatorEnumMultiplication       SlackConnectorOperatorEnum = "MULTIPLICATION"
	SlackConnectorOperatorEnumDivision             SlackConnectorOperatorEnum = "DIVISION"
	SlackConnectorOperatorEnumSubtraction          SlackConnectorOperatorEnum = "SUBTRACTION"
	SlackConnectorOperatorEnumMaskAll              SlackConnectorOperatorEnum = "MASK_ALL"
	SlackConnectorOperatorEnumMaskFirstN           SlackConnectorOperatorEnum = "MASK_FIRST_N"
	SlackConnectorOperatorEnumMaskLastN            SlackConnectorOperatorEnum = "MASK_LAST_N"
	SlackConnectorOperatorEnumValidateNonNull      SlackConnectorOperatorEnum = "VALIDATE_NON_NULL"
	SlackConnectorOperatorEnumValidateNonZero      SlackConnectorOperatorEnum = "VALIDATE_NON_ZERO"
	SlackConnectorOperatorEnumValidateNonNegative  SlackConnectorOperatorEnum = "VALIDATE_NON_NEGATIVE"
	SlackConnectorOperatorEnumValidateNumeric      SlackConnectorOperatorEnum = "VALIDATE_NUMERIC"
	SlackConnectorOperatorEnumNoOp                 SlackConnectorOperatorEnum = "NO_OP"
)
