package shared

import (
	"time"
)

type AppsListData struct {
	AppsList         []App            `json:"AppsList"`
	CreateTime       *time.Time       `json:"CreateTime"`
	LastUpdateTime   *time.Time       `json:"LastUpdateTime"`
	ListID           *string          `json:"ListId"`
	ListName         string           `json:"ListName"`
	ListUpdateToken  *string          `json:"ListUpdateToken"`
	PreviousAppsList map[string][]App `json:"PreviousAppsList"`
}
