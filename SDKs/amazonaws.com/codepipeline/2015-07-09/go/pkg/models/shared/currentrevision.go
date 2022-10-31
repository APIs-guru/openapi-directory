package shared

import (
"time")

type CurrentRevision struct {
    ChangeIdentifier string `json:"changeIdentifier"`
    Created *time.Time `json:"created,omitempty"`
    Revision string `json:"revision"`
    RevisionSummary *string `json:"revisionSummary,omitempty"`
    
}

