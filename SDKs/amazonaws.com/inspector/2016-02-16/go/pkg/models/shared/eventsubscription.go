package shared

import (
	"time"
)

// EventSubscription
// This data type is used in the <a>Subscription</a> data type.
type EventSubscription struct {
	Event        InspectorEventEnum `json:"event"`
	SubscribedAt time.Time          `json:"subscribedAt"`
}
