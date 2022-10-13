package shared

import (
	"time"
)

type DescribeAuditMitigationActionsTaskResponse struct {
	ActionsDefinition          []MitigationAction                     `json:"actionsDefinition"`
	AuditCheckToActionsMapping map[string][]string                    `json:"auditCheckToActionsMapping"`
	EndTime                    *time.Time                             `json:"endTime"`
	StartTime                  *time.Time                             `json:"startTime"`
	Target                     *AuditMitigationActionsTaskTarget      `json:"target"`
	TaskStatistics             map[string]TaskStatisticsForAuditCheck `json:"taskStatistics"`
	TaskStatus                 *AuditMitigationActionsTaskStatusEnum  `json:"taskStatus"`
}
