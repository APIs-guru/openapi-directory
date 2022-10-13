package shared

import (
	"time"
)

type DescribeNotificationRuleResult struct {
	Arn                   string                      `json:"Arn"`
	CreatedBy             *string                     `json:"CreatedBy"`
	CreatedTimestamp      *time.Time                  `json:"CreatedTimestamp"`
	DetailType            *DetailTypeEnum             `json:"DetailType"`
	EventTypes            []EventTypeSummary          `json:"EventTypes"`
	LastModifiedTimestamp *time.Time                  `json:"LastModifiedTimestamp"`
	Name                  *string                     `json:"Name"`
	Resource              *string                     `json:"Resource"`
	Status                *NotificationRuleStatusEnum `json:"Status"`
	Tags                  map[string]string           `json:"Tags"`
	Targets               []TargetSummary             `json:"Targets"`
}
