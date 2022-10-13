package shared

import (
	"time"
)

type ImageTagDetail struct {
	CreatedAt   *time.Time             `json:"createdAt"`
	ImageDetail *ReferencedImageDetail `json:"imageDetail"`
	ImageTag    *string                `json:"imageTag"`
}
