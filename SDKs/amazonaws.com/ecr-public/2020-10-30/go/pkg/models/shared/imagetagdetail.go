package shared

import (
"time")

type ImageTagDetail struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    ImageDetail *ReferencedImageDetail `json:"imageDetail,omitempty"`
    ImageTag *string `json:"imageTag,omitempty"`
    
}

