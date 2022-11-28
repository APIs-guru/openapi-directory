package shared

type NodeUpdateStatusEnum string

const (
	NodeUpdateStatusEnumNotApplied     NodeUpdateStatusEnum = "not-applied"
	NodeUpdateStatusEnumWaitingToStart NodeUpdateStatusEnum = "waiting-to-start"
	NodeUpdateStatusEnumInProgress     NodeUpdateStatusEnum = "in-progress"
	NodeUpdateStatusEnumStopping       NodeUpdateStatusEnum = "stopping"
	NodeUpdateStatusEnumStopped        NodeUpdateStatusEnum = "stopped"
	NodeUpdateStatusEnumComplete       NodeUpdateStatusEnum = "complete"
)
