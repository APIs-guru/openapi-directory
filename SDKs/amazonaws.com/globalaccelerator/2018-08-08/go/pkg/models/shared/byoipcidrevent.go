package shared

import (
	"time"
)

// ByoipCidrEvent
// A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes that you make in the status an IP address range that you bring to AWS Global Accelerator through bring your own IP address (BYOIP).
type ByoipCidrEvent struct {
	Message   *string    `json:"Message,omitempty"`
	Timestamp *time.Time `json:"Timestamp,omitempty"`
}
