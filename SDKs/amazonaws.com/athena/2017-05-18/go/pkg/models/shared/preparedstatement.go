package shared

import (
	"time"
)

type PreparedStatement struct {
	Description      *string    `json:"Description"`
	LastModifiedTime *time.Time `json:"LastModifiedTime"`
	QueryStatement   *string    `json:"QueryStatement"`
	StatementName    *string    `json:"StatementName"`
	WorkGroupName    *string    `json:"WorkGroupName"`
}
