package shared

import (
"time")

type DescribeAuditTaskResponse struct {
    AuditDetails map[string]AuditCheckDetails `json:"auditDetails,omitempty"`
    ScheduledAuditName *string `json:"scheduledAuditName,omitempty"`
    TaskStartTime *time.Time `json:"taskStartTime,omitempty"`
    TaskStatistics *TaskStatistics `json:"taskStatistics,omitempty"`
    TaskStatus *AuditTaskStatusEnum `json:"taskStatus,omitempty"`
    TaskType *AuditTaskTypeEnum `json:"taskType,omitempty"`
    
}

