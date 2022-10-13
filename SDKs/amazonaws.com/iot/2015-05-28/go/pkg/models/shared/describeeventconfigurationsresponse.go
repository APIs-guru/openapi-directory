package shared

import (
	"time"
)

type DescribeEventConfigurationsResponse struct {
	CreationDate        *time.Time               `json:"creationDate"`
	EventConfigurations map[string]Configuration `json:"eventConfigurations"`
	LastModifiedDate    *time.Time               `json:"lastModifiedDate"`
}
