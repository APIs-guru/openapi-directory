package shared

import (
"time")

type PreparedStatementSummary struct {
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    StatementName *string `json:"StatementName,omitempty"`
    
}

