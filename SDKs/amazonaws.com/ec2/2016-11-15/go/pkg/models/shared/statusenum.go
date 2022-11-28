package shared

type StatusEnum string

const (
	StatusEnumMoveInProgress StatusEnum = "MoveInProgress"
	StatusEnumInVpc          StatusEnum = "InVpc"
	StatusEnumInClassic      StatusEnum = "InClassic"
)
