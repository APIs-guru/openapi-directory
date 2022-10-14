package shared

import (
	"time"
)

type ProvisionedThroughputDescription struct {
	LastDecreaseDateTime   *time.Time `json:"LastDecreaseDateTime,omitempty"`
	LastIncreaseDateTime   *time.Time `json:"LastIncreaseDateTime,omitempty"`
	NumberOfDecreasesToday *int64     `json:"NumberOfDecreasesToday,omitempty"`
	ReadCapacityUnits      *int64     `json:"ReadCapacityUnits,omitempty"`
	WriteCapacityUnits     *int64     `json:"WriteCapacityUnits,omitempty"`
}
