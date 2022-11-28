package shared

type FleetActivityStatusEnum string

const (
	FleetActivityStatusEnumError              FleetActivityStatusEnum = "error"
	FleetActivityStatusEnumPendingFulfillment FleetActivityStatusEnum = "pending_fulfillment"
	FleetActivityStatusEnumPendingTermination FleetActivityStatusEnum = "pending_termination"
	FleetActivityStatusEnumFulfilled          FleetActivityStatusEnum = "fulfilled"
)
