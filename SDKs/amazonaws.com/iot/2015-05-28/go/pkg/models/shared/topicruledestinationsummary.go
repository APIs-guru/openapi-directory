package shared

import (
	"time"
)

type TopicRuleDestinationSummary struct {
	Arn                   *string                         `json:"arn,omitempty"`
	CreatedAt             *time.Time                      `json:"createdAt,omitempty"`
	HTTPURLSummary        *HTTPURLDestinationSummary      `json:"httpUrlSummary,omitempty"`
	LastUpdatedAt         *time.Time                      `json:"lastUpdatedAt,omitempty"`
	Status                *TopicRuleDestinationStatusEnum `json:"status,omitempty"`
	StatusReason          *string                         `json:"statusReason,omitempty"`
	VpcDestinationSummary *VpcDestinationSummary          `json:"vpcDestinationSummary,omitempty"`
}
