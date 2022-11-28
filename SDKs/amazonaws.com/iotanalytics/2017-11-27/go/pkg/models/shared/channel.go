package shared

import (
	"time"
)

// Channel
// A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline.
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
