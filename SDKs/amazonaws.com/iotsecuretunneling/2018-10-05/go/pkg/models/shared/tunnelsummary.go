package shared

import (
	"time"
)

type TunnelSummary struct {
	CreatedAt     *time.Time        `json:"createdAt"`
	Description   *string           `json:"description"`
	LastUpdatedAt *time.Time        `json:"lastUpdatedAt"`
	Status        *TunnelStatusEnum `json:"status"`
	TunnelArn     *string           `json:"tunnelArn"`
	TunnelID      *string           `json:"tunnelId"`
}
