package shared

type PhaseStatusEnum string

const (
	PhaseStatusEnumPending PhaseStatusEnum = "PENDING"
	PhaseStatusEnumSuccess PhaseStatusEnum = "SUCCESS"
	PhaseStatusEnumError   PhaseStatusEnum = "ERROR"
)
