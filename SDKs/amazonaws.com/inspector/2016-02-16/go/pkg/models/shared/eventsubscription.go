package shared

import (
	"time"
)

type EventSubscription struct {
	Event        InspectorEventEnum `json:"event"`
	SubscribedAt time.Time          `json:"subscribedAt"`
}
