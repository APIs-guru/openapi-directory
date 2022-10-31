package shared

import (
"time")

type RestoreSummary struct {
    RestoreDateTime time.Time `json:"RestoreDateTime"`
    RestoreInProgress bool `json:"RestoreInProgress"`
    SourceBackupArn *string `json:"SourceBackupArn,omitempty"`
    SourceTableArn *string `json:"SourceTableArn,omitempty"`
    
}

