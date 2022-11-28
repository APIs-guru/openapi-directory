package shared

import (
	"time"
)

// InputSummary
// Information about the input.
type InputSummary struct {
	CreationTime     *time.Time       `json:"creationTime,omitempty"`
	InputArn         *string          `json:"inputArn,omitempty"`
	InputDescription *string          `json:"inputDescription,omitempty"`
	InputName        *string          `json:"inputName,omitempty"`
	LastUpdateTime   *time.Time       `json:"lastUpdateTime,omitempty"`
	Status           *InputStatusEnum `json:"status,omitempty"`
}
