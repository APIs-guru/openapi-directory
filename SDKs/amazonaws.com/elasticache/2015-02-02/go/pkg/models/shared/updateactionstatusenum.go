package shared




type UpdateActionStatusEnum string

const (
    UpdateActionStatusEnumNotApplied UpdateActionStatusEnum = "not-applied"
UpdateActionStatusEnumWaitingToStart UpdateActionStatusEnum = "waiting-to-start"
UpdateActionStatusEnumInProgress UpdateActionStatusEnum = "in-progress"
UpdateActionStatusEnumStopping UpdateActionStatusEnum = "stopping"
UpdateActionStatusEnumStopped UpdateActionStatusEnum = "stopped"
UpdateActionStatusEnumComplete UpdateActionStatusEnum = "complete"
UpdateActionStatusEnumScheduling UpdateActionStatusEnum = "scheduling"
UpdateActionStatusEnumScheduled UpdateActionStatusEnum = "scheduled"
UpdateActionStatusEnumNotApplicable UpdateActionStatusEnum = "not-applicable"
)


