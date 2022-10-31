package shared

import (
"time")

type ActionRevision struct {
    Created time.Time `json:"created"`
    RevisionChangeID string `json:"revisionChangeId"`
    RevisionID string `json:"revisionId"`
    
}

