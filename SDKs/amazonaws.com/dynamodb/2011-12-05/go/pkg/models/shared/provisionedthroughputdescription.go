package shared

import (
	"time"
)

type ProvisionedThroughputDescription struct {
	LastDecreaseDateTime   *time.Time `json:"LastDecreaseDateTime"`
	LastIncreaseDateTime   *time.Time `json:"LastIncreaseDateTime"`
	NumberOfDecreasesToday *int64     `json:"NumberOfDecreasesToday"`
	ReadCapacityUnits      *int64     `json:"ReadCapacityUnits"`
	WriteCapacityUnits     *int64     `json:"WriteCapacityUnits"`
}
