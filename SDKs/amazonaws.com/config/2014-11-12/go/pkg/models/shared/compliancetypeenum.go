package shared




type ComplianceTypeEnum string

const (
    ComplianceTypeEnumCompliant ComplianceTypeEnum = "COMPLIANT"
ComplianceTypeEnumNonCompliant ComplianceTypeEnum = "NON_COMPLIANT"
ComplianceTypeEnumNotApplicable ComplianceTypeEnum = "NOT_APPLICABLE"
ComplianceTypeEnumInsufficientData ComplianceTypeEnum = "INSUFFICIENT_DATA"
)


