package shared

type ValidityPeriodTypeEnum string

const (
	ValidityPeriodTypeEnumEndDate  ValidityPeriodTypeEnum = "END_DATE"
	ValidityPeriodTypeEnumAbsolute ValidityPeriodTypeEnum = "ABSOLUTE"
	ValidityPeriodTypeEnumDays     ValidityPeriodTypeEnum = "DAYS"
	ValidityPeriodTypeEnumMonths   ValidityPeriodTypeEnum = "MONTHS"
	ValidityPeriodTypeEnumYears    ValidityPeriodTypeEnum = "YEARS"
)
