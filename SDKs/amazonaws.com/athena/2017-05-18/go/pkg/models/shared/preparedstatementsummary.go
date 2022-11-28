package shared

import (
	"time"
)

// PreparedStatementSummary
// The name and last modified time of the prepared statement.
type PreparedStatementSummary struct {
	LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
	StatementName    *string    `json:"StatementName,omitempty"`
}
