package shared




type GameSessionPlacementStateEnum string

const (
    GameSessionPlacementStateEnumPending GameSessionPlacementStateEnum = "PENDING"
GameSessionPlacementStateEnumFulfilled GameSessionPlacementStateEnum = "FULFILLED"
GameSessionPlacementStateEnumCancelled GameSessionPlacementStateEnum = "CANCELLED"
GameSessionPlacementStateEnumTimedOut GameSessionPlacementStateEnum = "TIMED_OUT"
GameSessionPlacementStateEnumFailed GameSessionPlacementStateEnum = "FAILED"
)


