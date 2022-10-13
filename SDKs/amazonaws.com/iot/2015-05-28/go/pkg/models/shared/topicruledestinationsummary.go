package shared

import (
	"time"
)

type TopicRuleDestinationSummary struct {
	Arn                   *string                         `json:"arn"`
	CreatedAt             *time.Time                      `json:"createdAt"`
	HTTPURLSummary        *HTTPURLDestinationSummary      `json:"httpUrlSummary"`
	LastUpdatedAt         *time.Time                      `json:"lastUpdatedAt"`
	Status                *TopicRuleDestinationStatusEnum `json:"status"`
	StatusReason          *string                         `json:"statusReason"`
	VpcDestinationSummary *VpcDestinationSummary          `json:"vpcDestinationSummary"`
}
