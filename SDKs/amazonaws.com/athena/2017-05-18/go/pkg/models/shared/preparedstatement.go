package shared

import (
	"time"
)

// PreparedStatement
// A prepared SQL statement for use with Athena.
type PreparedStatement struct {
	Description      *string    `json:"Description,omitempty"`
	LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
	QueryStatement   *string    `json:"QueryStatement,omitempty"`
	StatementName    *string    `json:"StatementName,omitempty"`
	WorkGroupName    *string    `json:"WorkGroupName,omitempty"`
}
