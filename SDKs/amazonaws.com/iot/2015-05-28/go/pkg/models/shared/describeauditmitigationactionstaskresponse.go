package shared

import (
"time")

type DescribeAuditMitigationActionsTaskResponse struct {
    ActionsDefinition []MitigationAction `json:"actionsDefinition,omitempty"`
    AuditCheckToActionsMapping map[string][]string `json:"auditCheckToActionsMapping,omitempty"`
    EndTime *time.Time `json:"endTime,omitempty"`
    StartTime *time.Time `json:"startTime,omitempty"`
    Target *AuditMitigationActionsTaskTarget `json:"target,omitempty"`
    TaskStatistics map[string]TaskStatisticsForAuditCheck `json:"taskStatistics,omitempty"`
    TaskStatus *AuditMitigationActionsTaskStatusEnum `json:"taskStatus,omitempty"`
    
}

