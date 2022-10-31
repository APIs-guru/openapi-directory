package shared

type DatadogConnectorOperatorEnum string

const (
	DatadogConnectorOperatorEnumProjection          DatadogConnectorOperatorEnum = "PROJECTION"
	DatadogConnectorOperatorEnumBetween             DatadogConnectorOperatorEnum = "BETWEEN"
	DatadogConnectorOperatorEnumEqualTo             DatadogConnectorOperatorEnum = "EQUAL_TO"
	DatadogConnectorOperatorEnumAddition            DatadogConnectorOperatorEnum = "ADDITION"
	DatadogConnectorOperatorEnumMultiplication      DatadogConnectorOperatorEnum = "MULTIPLICATION"
	DatadogConnectorOperatorEnumDivision            DatadogConnectorOperatorEnum = "DIVISION"
	DatadogConnectorOperatorEnumSubtraction         DatadogConnectorOperatorEnum = "SUBTRACTION"
	DatadogConnectorOperatorEnumMaskAll             DatadogConnectorOperatorEnum = "MASK_ALL"
	DatadogConnectorOperatorEnumMaskFirstN          DatadogConnectorOperatorEnum = "MASK_FIRST_N"
	DatadogConnectorOperatorEnumMaskLastN           DatadogConnectorOperatorEnum = "MASK_LAST_N"
	DatadogConnectorOperatorEnumValidateNonNull     DatadogConnectorOperatorEnum = "VALIDATE_NON_NULL"
	DatadogConnectorOperatorEnumValidateNonZero     DatadogConnectorOperatorEnum = "VALIDATE_NON_ZERO"
	DatadogConnectorOperatorEnumValidateNonNegative DatadogConnectorOperatorEnum = "VALIDATE_NON_NEGATIVE"
	DatadogConnectorOperatorEnumValidateNumeric     DatadogConnectorOperatorEnum = "VALIDATE_NUMERIC"
	DatadogConnectorOperatorEnumNoOp                DatadogConnectorOperatorEnum = "NO_OP"
)
