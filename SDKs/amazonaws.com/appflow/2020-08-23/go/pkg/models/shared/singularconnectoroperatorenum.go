package shared

type SingularConnectorOperatorEnum string

const (
	SingularConnectorOperatorEnumProjection          SingularConnectorOperatorEnum = "PROJECTION"
	SingularConnectorOperatorEnumEqualTo             SingularConnectorOperatorEnum = "EQUAL_TO"
	SingularConnectorOperatorEnumAddition            SingularConnectorOperatorEnum = "ADDITION"
	SingularConnectorOperatorEnumMultiplication      SingularConnectorOperatorEnum = "MULTIPLICATION"
	SingularConnectorOperatorEnumDivision            SingularConnectorOperatorEnum = "DIVISION"
	SingularConnectorOperatorEnumSubtraction         SingularConnectorOperatorEnum = "SUBTRACTION"
	SingularConnectorOperatorEnumMaskAll             SingularConnectorOperatorEnum = "MASK_ALL"
	SingularConnectorOperatorEnumMaskFirstN          SingularConnectorOperatorEnum = "MASK_FIRST_N"
	SingularConnectorOperatorEnumMaskLastN           SingularConnectorOperatorEnum = "MASK_LAST_N"
	SingularConnectorOperatorEnumValidateNonNull     SingularConnectorOperatorEnum = "VALIDATE_NON_NULL"
	SingularConnectorOperatorEnumValidateNonZero     SingularConnectorOperatorEnum = "VALIDATE_NON_ZERO"
	SingularConnectorOperatorEnumValidateNonNegative SingularConnectorOperatorEnum = "VALIDATE_NON_NEGATIVE"
	SingularConnectorOperatorEnumValidateNumeric     SingularConnectorOperatorEnum = "VALIDATE_NUMERIC"
	SingularConnectorOperatorEnumNoOp                SingularConnectorOperatorEnum = "NO_OP"
)
