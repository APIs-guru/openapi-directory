package shared

type PlayerSessionStatusEnum string

const (
	PlayerSessionStatusEnumReserved  PlayerSessionStatusEnum = "RESERVED"
	PlayerSessionStatusEnumActive    PlayerSessionStatusEnum = "ACTIVE"
	PlayerSessionStatusEnumCompleted PlayerSessionStatusEnum = "COMPLETED"
	PlayerSessionStatusEnumTimedout  PlayerSessionStatusEnum = "TIMEDOUT"
)
