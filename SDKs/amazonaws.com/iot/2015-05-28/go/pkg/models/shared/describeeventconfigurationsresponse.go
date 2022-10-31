package shared

import (
	"time"
)

type DescribeEventConfigurationsResponse struct {
	CreationDate        *time.Time               `json:"creationDate,omitempty"`
	EventConfigurations map[string]Configuration `json:"eventConfigurations,omitempty"`
	LastModifiedDate    *time.Time               `json:"lastModifiedDate,omitempty"`
}
