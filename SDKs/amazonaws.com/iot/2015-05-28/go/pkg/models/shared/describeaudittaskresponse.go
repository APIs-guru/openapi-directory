package shared

import (
	"time"
)

type DescribeAuditTaskResponse struct {
	AuditDetails       map[string]AuditCheckDetails `json:"auditDetails"`
	ScheduledAuditName *string                      `json:"scheduledAuditName"`
	TaskStartTime      *time.Time                   `json:"taskStartTime"`
	TaskStatistics     *TaskStatistics              `json:"taskStatistics"`
	TaskStatus         *AuditTaskStatusEnum         `json:"taskStatus"`
	TaskType           *AuditTaskTypeEnum           `json:"taskType"`
}
