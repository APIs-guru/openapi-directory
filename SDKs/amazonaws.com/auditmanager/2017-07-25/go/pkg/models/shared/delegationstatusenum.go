package shared

type DelegationStatusEnum string

const (
	DelegationStatusEnumInProgress  DelegationStatusEnum = "IN_PROGRESS"
	DelegationStatusEnumUnderReview DelegationStatusEnum = "UNDER_REVIEW"
	DelegationStatusEnumComplete    DelegationStatusEnum = "COMPLETE"
)
