package shared

type EventTypeEnum string

const (
	EventTypeEnumSystem        EventTypeEnum = "SYSTEM"
	EventTypeEnumCreateAction  EventTypeEnum = "CREATE_ACTION"
	EventTypeEnumDeleteAction  EventTypeEnum = "DELETE_ACTION"
	EventTypeEnumUpdateAction  EventTypeEnum = "UPDATE_ACTION"
	EventTypeEnumExecuteAction EventTypeEnum = "EXECUTE_ACTION"
)
