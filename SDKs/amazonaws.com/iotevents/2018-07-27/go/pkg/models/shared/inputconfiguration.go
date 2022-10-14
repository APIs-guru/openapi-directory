package shared

import (
	"time"
)

type InputConfiguration struct {
	CreationTime     time.Time       `json:"creationTime"`
	InputArn         string          `json:"inputArn"`
	InputDescription *string         `json:"inputDescription,omitempty"`
	InputName        string          `json:"inputName"`
	LastUpdateTime   time.Time       `json:"lastUpdateTime"`
	Status           InputStatusEnum `json:"status"`
}
