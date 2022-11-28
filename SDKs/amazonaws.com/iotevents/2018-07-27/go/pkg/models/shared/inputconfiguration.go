package shared

import (
	"time"
)

// InputConfiguration
// Information about the configuration of an input.
type InputConfiguration struct {
	CreationTime     time.Time       `json:"creationTime"`
	InputArn         string          `json:"inputArn"`
	InputDescription *string         `json:"inputDescription,omitempty"`
	InputName        string          `json:"inputName"`
	LastUpdateTime   time.Time       `json:"lastUpdateTime"`
	Status           InputStatusEnum `json:"status"`
}
