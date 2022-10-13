package shared

import (
	"time"
)

type PortalSummary struct {
	CreationDate   *time.Time   `json:"creationDate"`
	Description    *string      `json:"description"`
	ID             string       `json:"id"`
	LastUpdateDate *time.Time   `json:"lastUpdateDate"`
	Name           string       `json:"name"`
	RoleArn        *string      `json:"roleArn"`
	StartURL       string       `json:"startUrl"`
	Status         PortalStatus `json:"status"`
}
