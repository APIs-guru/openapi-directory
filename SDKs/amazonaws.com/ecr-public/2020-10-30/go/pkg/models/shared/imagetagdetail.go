package shared

import (
	"time"
)

// ImageTagDetail
// An object representing the image tag details for an image.
type ImageTagDetail struct {
	CreatedAt   *time.Time             `json:"createdAt,omitempty"`
	ImageDetail *ReferencedImageDetail `json:"imageDetail,omitempty"`
	ImageTag    *string                `json:"imageTag,omitempty"`
}
