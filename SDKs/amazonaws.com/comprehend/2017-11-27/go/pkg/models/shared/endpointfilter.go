package shared

import (
	"time"
)

type EndpointFilter struct {
	CreationTimeAfter  *time.Time          `json:"CreationTimeAfter"`
	CreationTimeBefore *time.Time          `json:"CreationTimeBefore"`
	ModelArn           *string             `json:"ModelArn"`
	Status             *EndpointStatusEnum `json:"Status"`
}
