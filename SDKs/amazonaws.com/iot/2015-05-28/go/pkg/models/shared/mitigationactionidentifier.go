package shared

import (
	"time"
)

type MitigationActionIdentifier struct {
	ActionArn    *string    `json:"actionArn,omitempty"`
	ActionName   *string    `json:"actionName,omitempty"`
	CreationDate *time.Time `json:"creationDate,omitempty"`
}
