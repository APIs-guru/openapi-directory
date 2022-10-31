package shared

type SalesforceConnectorOperatorEnum string

const (
	SalesforceConnectorOperatorEnumProjection           SalesforceConnectorOperatorEnum = "PROJECTION"
	SalesforceConnectorOperatorEnumLessThan             SalesforceConnectorOperatorEnum = "LESS_THAN"
	SalesforceConnectorOperatorEnumContains             SalesforceConnectorOperatorEnum = "CONTAINS"
	SalesforceConnectorOperatorEnumGreaterThan          SalesforceConnectorOperatorEnum = "GREATER_THAN"
	SalesforceConnectorOperatorEnumBetween              SalesforceConnectorOperatorEnum = "BETWEEN"
	SalesforceConnectorOperatorEnumLessThanOrEqualTo    SalesforceConnectorOperatorEnum = "LESS_THAN_OR_EQUAL_TO"
	SalesforceConnectorOperatorEnumGreaterThanOrEqualTo SalesforceConnectorOperatorEnum = "GREATER_THAN_OR_EQUAL_TO"
	SalesforceConnectorOperatorEnumEqualTo              SalesforceConnectorOperatorEnum = "EQUAL_TO"
	SalesforceConnectorOperatorEnumNotEqualTo           SalesforceConnectorOperatorEnum = "NOT_EQUAL_TO"
	SalesforceConnectorOperatorEnumAddition             SalesforceConnectorOperatorEnum = "ADDITION"
	SalesforceConnectorOperatorEnumMultiplication       SalesforceConnectorOperatorEnum = "MULTIPLICATION"
	SalesforceConnectorOperatorEnumDivision             SalesforceConnectorOperatorEnum = "DIVISION"
	SalesforceConnectorOperatorEnumSubtraction          SalesforceConnectorOperatorEnum = "SUBTRACTION"
	SalesforceConnectorOperatorEnumMaskAll              SalesforceConnectorOperatorEnum = "MASK_ALL"
	SalesforceConnectorOperatorEnumMaskFirstN           SalesforceConnectorOperatorEnum = "MASK_FIRST_N"
	SalesforceConnectorOperatorEnumMaskLastN            SalesforceConnectorOperatorEnum = "MASK_LAST_N"
	SalesforceConnectorOperatorEnumValidateNonNull      SalesforceConnectorOperatorEnum = "VALIDATE_NON_NULL"
	SalesforceConnectorOperatorEnumValidateNonZero      SalesforceConnectorOperatorEnum = "VALIDATE_NON_ZERO"
	SalesforceConnectorOperatorEnumValidateNonNegative  SalesforceConnectorOperatorEnum = "VALIDATE_NON_NEGATIVE"
	SalesforceConnectorOperatorEnumValidateNumeric      SalesforceConnectorOperatorEnum = "VALIDATE_NUMERIC"
	SalesforceConnectorOperatorEnumNoOp                 SalesforceConnectorOperatorEnum = "NO_OP"
)
