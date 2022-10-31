package shared

import (
	"time"
)

type DescribeCrossAccountAccessRoleResponse struct {
	RegisteredAt time.Time `json:"registeredAt"`
	RoleArn      string    `json:"roleArn"`
	Valid        bool      `json:"valid"`
}
