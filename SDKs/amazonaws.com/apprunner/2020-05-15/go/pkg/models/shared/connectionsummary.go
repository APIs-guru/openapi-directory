package shared

import (
	"time"
)

type ConnectionSummary struct {
	ConnectionArn  *string               `json:"ConnectionArn"`
	ConnectionName *string               `json:"ConnectionName"`
	CreatedAt      *time.Time            `json:"CreatedAt"`
	ProviderType   *ProviderTypeEnum     `json:"ProviderType"`
	Status         *ConnectionStatusEnum `json:"Status"`
}
