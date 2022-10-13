package shared

import (
	"time"
)

type PreparedStatementSummary struct {
	LastModifiedTime *time.Time `json:"LastModifiedTime"`
	StatementName    *string    `json:"StatementName"`
}
