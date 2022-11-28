package shared

import (
	"time"
)

// TestCase
//
//	Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test.
type TestCase struct {
	DurationInNanoSeconds *int64     `json:"durationInNanoSeconds,omitempty"`
	Expired               *time.Time `json:"expired,omitempty"`
	Message               *string    `json:"message,omitempty"`
	Name                  *string    `json:"name,omitempty"`
	Prefix                *string    `json:"prefix,omitempty"`
	ReportArn             *string    `json:"reportArn,omitempty"`
	Status                *string    `json:"status,omitempty"`
	TestRawDataPath       *string    `json:"testRawDataPath,omitempty"`
}
