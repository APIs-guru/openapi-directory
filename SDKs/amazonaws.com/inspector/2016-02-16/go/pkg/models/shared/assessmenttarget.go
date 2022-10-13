package shared

import (
	"time"
)

type AssessmentTarget struct {
	Arn              string    `json:"arn"`
	CreatedAt        time.Time `json:"createdAt"`
	Name             string    `json:"name"`
	ResourceGroupArn *string   `json:"resourceGroupArn"`
	UpdatedAt        time.Time `json:"updatedAt"`
}
