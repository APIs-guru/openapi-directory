package shared

import (
"time")

type ArtifactRevision struct {
    Created *time.Time `json:"created,omitempty"`
    Name *string `json:"name,omitempty"`
    RevisionChangeIdentifier *string `json:"revisionChangeIdentifier,omitempty"`
    RevisionID *string `json:"revisionId,omitempty"`
    RevisionSummary *string `json:"revisionSummary,omitempty"`
    RevisionURL *string `json:"revisionUrl,omitempty"`
    
}

