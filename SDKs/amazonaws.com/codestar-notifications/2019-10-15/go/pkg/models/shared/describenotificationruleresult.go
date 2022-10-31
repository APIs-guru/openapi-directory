package shared

import (
"time")

type DescribeNotificationRuleResult struct {
    Arn string `json:"Arn"`
    CreatedBy *string `json:"CreatedBy,omitempty"`
    CreatedTimestamp *time.Time `json:"CreatedTimestamp,omitempty"`
    DetailType *DetailTypeEnum `json:"DetailType,omitempty"`
    EventTypes []EventTypeSummary `json:"EventTypes,omitempty"`
    LastModifiedTimestamp *time.Time `json:"LastModifiedTimestamp,omitempty"`
    Name *string `json:"Name,omitempty"`
    Resource *string `json:"Resource,omitempty"`
    Status *NotificationRuleStatusEnum `json:"Status,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    Targets []TargetSummary `json:"Targets,omitempty"`
    
}

