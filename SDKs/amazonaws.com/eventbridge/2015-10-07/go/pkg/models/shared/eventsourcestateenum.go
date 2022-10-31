package shared

type EventSourceStateEnum string

const (
	EventSourceStateEnumPending EventSourceStateEnum = "PENDING"
	EventSourceStateEnumActive  EventSourceStateEnum = "ACTIVE"
	EventSourceStateEnumDeleted EventSourceStateEnum = "DELETED"
)
