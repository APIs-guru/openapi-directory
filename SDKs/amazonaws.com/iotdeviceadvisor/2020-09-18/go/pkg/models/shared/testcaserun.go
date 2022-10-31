package shared

import (
	"time"
)

type TestCaseRun struct {
	EndTime                *time.Time  `json:"endTime,omitempty"`
	Failure                *string     `json:"failure,omitempty"`
	LogURL                 *string     `json:"logUrl,omitempty"`
	StartTime              *time.Time  `json:"startTime,omitempty"`
	Status                 *StatusEnum `json:"status,omitempty"`
	TestCaseDefinitionID   *string     `json:"testCaseDefinitionId,omitempty"`
	TestCaseDefinitionName *string     `json:"testCaseDefinitionName,omitempty"`
	TestCaseRunID          *string     `json:"testCaseRunId,omitempty"`
	Warnings               *string     `json:"warnings,omitempty"`
}
