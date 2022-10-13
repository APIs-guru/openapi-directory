package shared

import (
	"time"
)

type ServiceSummary struct {
	CreatedAt   *time.Time         `json:"CreatedAt"`
	ServiceArn  *string            `json:"ServiceArn"`
	ServiceID   *string            `json:"ServiceId"`
	ServiceName *string            `json:"ServiceName"`
	ServiceURL  *string            `json:"ServiceUrl"`
	Status      *ServiceStatusEnum `json:"Status"`
	UpdatedAt   *time.Time         `json:"UpdatedAt"`
}
