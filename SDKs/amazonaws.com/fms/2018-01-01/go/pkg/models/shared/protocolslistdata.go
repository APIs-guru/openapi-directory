package shared

import (
	"time"
)

type ProtocolsListData struct {
	CreateTime            *time.Time          `json:"CreateTime"`
	LastUpdateTime        *time.Time          `json:"LastUpdateTime"`
	ListID                *string             `json:"ListId"`
	ListName              string              `json:"ListName"`
	ListUpdateToken       *string             `json:"ListUpdateToken"`
	PreviousProtocolsList map[string][]string `json:"PreviousProtocolsList"`
	ProtocolsList         []string            `json:"ProtocolsList"`
}
