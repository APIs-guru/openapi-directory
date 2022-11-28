package shared

type SummaryStatusEnum string

const (
	SummaryStatusEnumOk               SummaryStatusEnum = "ok"
	SummaryStatusEnumImpaired         SummaryStatusEnum = "impaired"
	SummaryStatusEnumInsufficientData SummaryStatusEnum = "insufficient-data"
	SummaryStatusEnumNotApplicable    SummaryStatusEnum = "not-applicable"
	SummaryStatusEnumInitializing     SummaryStatusEnum = "initializing"
)
