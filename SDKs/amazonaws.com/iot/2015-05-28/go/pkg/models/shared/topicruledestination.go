package shared

import (
	"time"
)

type TopicRuleDestination struct {
	Arn               *string                         `json:"arn"`
	CreatedAt         *time.Time                      `json:"createdAt"`
	HTTPURLProperties *HTTPURLDestinationProperties   `json:"httpUrlProperties"`
	LastUpdatedAt     *time.Time                      `json:"lastUpdatedAt"`
	Status            *TopicRuleDestinationStatusEnum `json:"status"`
	StatusReason      *string                         `json:"statusReason"`
	VpcProperties     *VpcDestinationProperties       `json:"vpcProperties"`
}
