package shared

import (
	"time"
)

// ActionRevision
// Represents information about the version (or revision) of an action.
type ActionRevision struct {
	Created          time.Time `json:"created"`
	RevisionChangeID string    `json:"revisionChangeId"`
	RevisionID       string    `json:"revisionId"`
}
