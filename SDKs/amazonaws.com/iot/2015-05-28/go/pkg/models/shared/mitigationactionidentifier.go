package shared

import (
	"time"
)

// MitigationActionIdentifier
// Information that identifies a mitigation action. This information is returned by ListMitigationActions.
type MitigationActionIdentifier struct {
	ActionArn    *string    `json:"actionArn,omitempty"`
	ActionName   *string    `json:"actionName,omitempty"`
	CreationDate *time.Time `json:"creationDate,omitempty"`
}
