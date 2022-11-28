package shared

import (
	"time"
)

// ProvisionedThroughputDescription
// Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.
type ProvisionedThroughputDescription struct {
	LastDecreaseDateTime   *time.Time `json:"LastDecreaseDateTime,omitempty"`
	LastIncreaseDateTime   *time.Time `json:"LastIncreaseDateTime,omitempty"`
	NumberOfDecreasesToday *int64     `json:"NumberOfDecreasesToday,omitempty"`
	ReadCapacityUnits      *int64     `json:"ReadCapacityUnits,omitempty"`
	WriteCapacityUnits     *int64     `json:"WriteCapacityUnits,omitempty"`
}
