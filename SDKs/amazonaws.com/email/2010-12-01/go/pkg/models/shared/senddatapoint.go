package shared

import (
	"time"
)

// SendDataPoint
// Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity.
type SendDataPoint struct {
	Bounces          *int64
	Complaints       *int64
	DeliveryAttempts *int64
	Rejects          *int64
	Timestamp        *time.Time
}
