package shared

import (
"time")

type TopicRuleDestination struct {
    Arn *string `json:"arn,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    HTTPURLProperties *HTTPURLDestinationProperties `json:"httpUrlProperties,omitempty"`
    LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
    Status *TopicRuleDestinationStatusEnum `json:"status,omitempty"`
    StatusReason *string `json:"statusReason,omitempty"`
    VpcProperties *VpcDestinationProperties `json:"vpcProperties,omitempty"`
    
}

