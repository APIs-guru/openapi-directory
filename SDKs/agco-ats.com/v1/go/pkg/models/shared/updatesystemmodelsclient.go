package shared

import (
	"time"
)

type UpdateSystemModelsClient struct {
	ClientID    *string    `json:"ClientID" form:"name=ClientID"`
	LastCheckin *time.Time `json:"LastCheckin" form:"name=LastCheckin"`
	Tag         *string    `json:"Tag" form:"name=Tag"`
}
