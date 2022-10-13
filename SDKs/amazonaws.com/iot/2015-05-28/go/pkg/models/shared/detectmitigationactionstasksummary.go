package shared

import (
	"time"
)

type DetectMitigationActionsTaskSummary struct {
	ActionsDefinition             []MitigationAction                     `json:"actionsDefinition"`
	OnlyActiveViolationsIncluded  *bool                                  `json:"onlyActiveViolationsIncluded"`
	SuppressedAlertsIncluded      *bool                                  `json:"suppressedAlertsIncluded"`
	Target                        *DetectMitigationActionsTaskTarget     `json:"target"`
	TaskEndTime                   *time.Time                             `json:"taskEndTime"`
	TaskID                        *string                                `json:"taskId"`
	TaskStartTime                 *time.Time                             `json:"taskStartTime"`
	TaskStatistics                *DetectMitigationActionsTaskStatistics `json:"taskStatistics"`
	TaskStatus                    *DetectMitigationActionsTaskStatusEnum `json:"taskStatus"`
	ViolationEventOccurrenceRange *ViolationEventOccurrenceRange         `json:"violationEventOccurrenceRange"`
}
