package shared

type ServiceNowConnectorOperatorEnum string

const (
	ServiceNowConnectorOperatorEnumProjection           ServiceNowConnectorOperatorEnum = "PROJECTION"
	ServiceNowConnectorOperatorEnumContains             ServiceNowConnectorOperatorEnum = "CONTAINS"
	ServiceNowConnectorOperatorEnumLessThan             ServiceNowConnectorOperatorEnum = "LESS_THAN"
	ServiceNowConnectorOperatorEnumGreaterThan          ServiceNowConnectorOperatorEnum = "GREATER_THAN"
	ServiceNowConnectorOperatorEnumBetween              ServiceNowConnectorOperatorEnum = "BETWEEN"
	ServiceNowConnectorOperatorEnumLessThanOrEqualTo    ServiceNowConnectorOperatorEnum = "LESS_THAN_OR_EQUAL_TO"
	ServiceNowConnectorOperatorEnumGreaterThanOrEqualTo ServiceNowConnectorOperatorEnum = "GREATER_THAN_OR_EQUAL_TO"
	ServiceNowConnectorOperatorEnumEqualTo              ServiceNowConnectorOperatorEnum = "EQUAL_TO"
	ServiceNowConnectorOperatorEnumNotEqualTo           ServiceNowConnectorOperatorEnum = "NOT_EQUAL_TO"
	ServiceNowConnectorOperatorEnumAddition             ServiceNowConnectorOperatorEnum = "ADDITION"
	ServiceNowConnectorOperatorEnumMultiplication       ServiceNowConnectorOperatorEnum = "MULTIPLICATION"
	ServiceNowConnectorOperatorEnumDivision             ServiceNowConnectorOperatorEnum = "DIVISION"
	ServiceNowConnectorOperatorEnumSubtraction          ServiceNowConnectorOperatorEnum = "SUBTRACTION"
	ServiceNowConnectorOperatorEnumMaskAll              ServiceNowConnectorOperatorEnum = "MASK_ALL"
	ServiceNowConnectorOperatorEnumMaskFirstN           ServiceNowConnectorOperatorEnum = "MASK_FIRST_N"
	ServiceNowConnectorOperatorEnumMaskLastN            ServiceNowConnectorOperatorEnum = "MASK_LAST_N"
	ServiceNowConnectorOperatorEnumValidateNonNull      ServiceNowConnectorOperatorEnum = "VALIDATE_NON_NULL"
	ServiceNowConnectorOperatorEnumValidateNonZero      ServiceNowConnectorOperatorEnum = "VALIDATE_NON_ZERO"
	ServiceNowConnectorOperatorEnumValidateNonNegative  ServiceNowConnectorOperatorEnum = "VALIDATE_NON_NEGATIVE"
	ServiceNowConnectorOperatorEnumValidateNumeric      ServiceNowConnectorOperatorEnum = "VALIDATE_NUMERIC"
	ServiceNowConnectorOperatorEnumNoOp                 ServiceNowConnectorOperatorEnum = "NO_OP"
)
