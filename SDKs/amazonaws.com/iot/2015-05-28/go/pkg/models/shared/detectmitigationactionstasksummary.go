package shared

import (
"time")

type DetectMitigationActionsTaskSummary struct {
    ActionsDefinition []MitigationAction `json:"actionsDefinition,omitempty"`
    OnlyActiveViolationsIncluded *bool `json:"onlyActiveViolationsIncluded,omitempty"`
    SuppressedAlertsIncluded *bool `json:"suppressedAlertsIncluded,omitempty"`
    Target *DetectMitigationActionsTaskTarget `json:"target,omitempty"`
    TaskEndTime *time.Time `json:"taskEndTime,omitempty"`
    TaskID *string `json:"taskId,omitempty"`
    TaskStartTime *time.Time `json:"taskStartTime,omitempty"`
    TaskStatistics *DetectMitigationActionsTaskStatistics `json:"taskStatistics,omitempty"`
    TaskStatus *DetectMitigationActionsTaskStatusEnum `json:"taskStatus,omitempty"`
    ViolationEventOccurrenceRange *ViolationEventOccurrenceRange `json:"violationEventOccurrenceRange,omitempty"`
    
}

