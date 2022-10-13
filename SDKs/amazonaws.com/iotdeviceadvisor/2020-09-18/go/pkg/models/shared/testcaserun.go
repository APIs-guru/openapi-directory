package shared

import (
	"time"
)

type TestCaseRun struct {
	EndTime                *time.Time  `json:"endTime"`
	Failure                *string     `json:"failure"`
	LogURL                 *string     `json:"logUrl"`
	StartTime              *time.Time  `json:"startTime"`
	Status                 *StatusEnum `json:"status"`
	TestCaseDefinitionID   *string     `json:"testCaseDefinitionId"`
	TestCaseDefinitionName *string     `json:"testCaseDefinitionName"`
	TestCaseRunID          *string     `json:"testCaseRunId"`
	Warnings               *string     `json:"warnings"`
}
