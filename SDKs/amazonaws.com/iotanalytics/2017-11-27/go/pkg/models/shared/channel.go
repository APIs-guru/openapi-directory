package shared

import (
	"time"
)

type Channel struct {
	Arn                    *string            `json:"arn,omitempty"`
	CreationTime           *time.Time         `json:"creationTime,omitempty"`
	LastMessageArrivalTime *time.Time         `json:"lastMessageArrivalTime,omitempty"`
	LastUpdateTime         *time.Time         `json:"lastUpdateTime,omitempty"`
	Name                   *string            `json:"name,omitempty"`
	RetentionPeriod        *RetentionPeriod   `json:"retentionPeriod,omitempty"`
	Status                 *ChannelStatusEnum `json:"status,omitempty"`
	Storage                *ChannelStorage    `json:"storage,omitempty"`
}
