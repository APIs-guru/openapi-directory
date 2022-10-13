package shared

import (
	"time"
)

type ArtifactRevision struct {
	Created                  *time.Time `json:"created"`
	Name                     *string    `json:"name"`
	RevisionChangeIdentifier *string    `json:"revisionChangeIdentifier"`
	RevisionID               *string    `json:"revisionId"`
	RevisionSummary          *string    `json:"revisionSummary"`
	RevisionURL              *string    `json:"revisionUrl"`
}
