package shared

type MoveStatusEnum string

const (
	MoveStatusEnumMovingToVpc        MoveStatusEnum = "movingToVpc"
	MoveStatusEnumRestoringToClassic MoveStatusEnum = "restoringToClassic"
)
