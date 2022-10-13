package shared

import (
	"time"
)

type DescribeDimensionResponse struct {
	Arn              *string            `json:"arn"`
	CreationDate     *time.Time         `json:"creationDate"`
	LastModifiedDate *time.Time         `json:"lastModifiedDate"`
	Name             *string            `json:"name"`
	StringValues     []string           `json:"stringValues"`
	Type             *DimensionTypeEnum `json:"type"`
}
