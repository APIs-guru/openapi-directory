package shared

import (
	"time"
)

// ProtocolsListData
// An Firewall Manager protocols list.
type ProtocolsListData struct {
	CreateTime            *time.Time          `json:"CreateTime,omitempty"`
	LastUpdateTime        *time.Time          `json:"LastUpdateTime,omitempty"`
	ListID                *string             `json:"ListId,omitempty"`
	ListName              string              `json:"ListName"`
	ListUpdateToken       *string             `json:"ListUpdateToken,omitempty"`
	PreviousProtocolsList map[string][]string `json:"PreviousProtocolsList,omitempty"`
	ProtocolsList         []string            `json:"ProtocolsList"`
}
