package shared

import (
	"time"
)

type ResourceGroup struct {
	Arn       string             `json:"arn"`
	CreatedAt time.Time          `json:"createdAt"`
	Tags      []ResourceGroupTag `json:"tags"`
}
