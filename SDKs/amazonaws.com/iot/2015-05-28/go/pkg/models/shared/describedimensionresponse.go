package shared

import (
	"time"
)

type DescribeDimensionResponse struct {
	Arn              *string            `json:"arn,omitempty"`
	CreationDate     *time.Time         `json:"creationDate,omitempty"`
	LastModifiedDate *time.Time         `json:"lastModifiedDate,omitempty"`
	Name             *string            `json:"name,omitempty"`
	StringValues     []string           `json:"stringValues,omitempty"`
	Type             *DimensionTypeEnum `json:"type,omitempty"`
}
