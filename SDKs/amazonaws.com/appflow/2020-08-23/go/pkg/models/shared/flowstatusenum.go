package shared

type FlowStatusEnum string

const (
	FlowStatusEnumActive     FlowStatusEnum = "Active"
	FlowStatusEnumDeprecated FlowStatusEnum = "Deprecated"
	FlowStatusEnumDeleted    FlowStatusEnum = "Deleted"
	FlowStatusEnumDraft      FlowStatusEnum = "Draft"
	FlowStatusEnumErrored    FlowStatusEnum = "Errored"
	FlowStatusEnumSuspended  FlowStatusEnum = "Suspended"
)
