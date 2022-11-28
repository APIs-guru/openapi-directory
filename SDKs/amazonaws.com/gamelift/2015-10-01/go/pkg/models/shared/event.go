package shared

import (
	"time"
)

// Event
// <p>Log entry describing an event that involves GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetEvents</a> </p>
type Event struct {
	EventCode       *EventCodeEnum `json:"EventCode,omitempty"`
	EventID         *string        `json:"EventId,omitempty"`
	EventTime       *time.Time     `json:"EventTime,omitempty"`
	Message         *string        `json:"Message,omitempty"`
	PreSignedLogURL *string        `json:"PreSignedLogUrl,omitempty"`
	ResourceID      *string        `json:"ResourceId,omitempty"`
}
