package shared

type AllocationStateEnum string

const (
	AllocationStateEnumAvailable                AllocationStateEnum = "available"
	AllocationStateEnumUnderAssessment          AllocationStateEnum = "under-assessment"
	AllocationStateEnumPermanentFailure         AllocationStateEnum = "permanent-failure"
	AllocationStateEnumReleased                 AllocationStateEnum = "released"
	AllocationStateEnumReleasedPermanentFailure AllocationStateEnum = "released-permanent-failure"
	AllocationStateEnumPending                  AllocationStateEnum = "pending"
)
