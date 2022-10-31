package shared

import (
	"time"
)

type ChannelSummary struct {
	ChannelName            *string                `json:"channelName,omitempty"`
	ChannelStorage         *ChannelStorageSummary `json:"channelStorage,omitempty"`
	CreationTime           *time.Time             `json:"creationTime,omitempty"`
	LastMessageArrivalTime *time.Time             `json:"lastMessageArrivalTime,omitempty"`
	LastUpdateTime         *time.Time             `json:"lastUpdateTime,omitempty"`
	Status                 *ChannelStatusEnum     `json:"status,omitempty"`
}
