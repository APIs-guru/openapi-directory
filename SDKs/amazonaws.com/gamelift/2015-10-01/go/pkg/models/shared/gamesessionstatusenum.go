package shared




type GameSessionStatusEnum string

const (
    GameSessionStatusEnumActive GameSessionStatusEnum = "ACTIVE"
GameSessionStatusEnumActivating GameSessionStatusEnum = "ACTIVATING"
GameSessionStatusEnumTerminated GameSessionStatusEnum = "TERMINATED"
GameSessionStatusEnumTerminating GameSessionStatusEnum = "TERMINATING"
GameSessionStatusEnumError GameSessionStatusEnum = "ERROR"
)


