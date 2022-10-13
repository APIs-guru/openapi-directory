package shared

import (
	"time"
)

type Channel struct {
	Arn                    *string            `json:"arn"`
	CreationTime           *time.Time         `json:"creationTime"`
	LastMessageArrivalTime *time.Time         `json:"lastMessageArrivalTime"`
	LastUpdateTime         *time.Time         `json:"lastUpdateTime"`
	Name                   *string            `json:"name"`
	RetentionPeriod        *RetentionPeriod   `json:"retentionPeriod"`
	Status                 *ChannelStatusEnum `json:"status"`
	Storage                *ChannelStorage    `json:"storage"`
}
