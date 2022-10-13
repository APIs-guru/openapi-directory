package shared

type S3ConnectorOperatorEnum string

const (
	S3ConnectorOperatorEnumProjection           S3ConnectorOperatorEnum = "PROJECTION"
	S3ConnectorOperatorEnumLessThan             S3ConnectorOperatorEnum = "LESS_THAN"
	S3ConnectorOperatorEnumGreaterThan          S3ConnectorOperatorEnum = "GREATER_THAN"
	S3ConnectorOperatorEnumBetween              S3ConnectorOperatorEnum = "BETWEEN"
	S3ConnectorOperatorEnumLessThanOrEqualTo    S3ConnectorOperatorEnum = "LESS_THAN_OR_EQUAL_TO"
	S3ConnectorOperatorEnumGreaterThanOrEqualTo S3ConnectorOperatorEnum = "GREATER_THAN_OR_EQUAL_TO"
	S3ConnectorOperatorEnumEqualTo              S3ConnectorOperatorEnum = "EQUAL_TO"
	S3ConnectorOperatorEnumNotEqualTo           S3ConnectorOperatorEnum = "NOT_EQUAL_TO"
	S3ConnectorOperatorEnumAddition             S3ConnectorOperatorEnum = "ADDITION"
	S3ConnectorOperatorEnumMultiplication       S3ConnectorOperatorEnum = "MULTIPLICATION"
	S3ConnectorOperatorEnumDivision             S3ConnectorOperatorEnum = "DIVISION"
	S3ConnectorOperatorEnumSubtraction          S3ConnectorOperatorEnum = "SUBTRACTION"
	S3ConnectorOperatorEnumMaskAll              S3ConnectorOperatorEnum = "MASK_ALL"
	S3ConnectorOperatorEnumMaskFirstN           S3ConnectorOperatorEnum = "MASK_FIRST_N"
	S3ConnectorOperatorEnumMaskLastN            S3ConnectorOperatorEnum = "MASK_LAST_N"
	S3ConnectorOperatorEnumValidateNonNull      S3ConnectorOperatorEnum = "VALIDATE_NON_NULL"
	S3ConnectorOperatorEnumValidateNonZero      S3ConnectorOperatorEnum = "VALIDATE_NON_ZERO"
	S3ConnectorOperatorEnumValidateNonNegative  S3ConnectorOperatorEnum = "VALIDATE_NON_NEGATIVE"
	S3ConnectorOperatorEnumValidateNumeric      S3ConnectorOperatorEnum = "VALIDATE_NUMERIC"
	S3ConnectorOperatorEnumNoOp                 S3ConnectorOperatorEnum = "NO_OP"
)
