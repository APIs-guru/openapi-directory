package shared

import (
	"time"
)

type TestCase struct {
	DurationInNanoSeconds *int64     `json:"durationInNanoSeconds"`
	Expired               *time.Time `json:"expired"`
	Message               *string    `json:"message"`
	Name                  *string    `json:"name"`
	Prefix                *string    `json:"prefix"`
	ReportArn             *string    `json:"reportArn"`
	Status                *string    `json:"status"`
	TestRawDataPath       *string    `json:"testRawDataPath"`
}
