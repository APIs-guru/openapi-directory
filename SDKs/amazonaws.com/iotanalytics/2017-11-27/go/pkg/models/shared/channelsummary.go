package shared

import (
	"time"
)

type ChannelSummary struct {
	ChannelName            *string                `json:"channelName"`
	ChannelStorage         *ChannelStorageSummary `json:"channelStorage"`
	CreationTime           *time.Time             `json:"creationTime"`
	LastMessageArrivalTime *time.Time             `json:"lastMessageArrivalTime"`
	LastUpdateTime         *time.Time             `json:"lastUpdateTime"`
	Status                 *ChannelStatusEnum     `json:"status"`
}
