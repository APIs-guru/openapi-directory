package shared

import (
	"time"
)

type GetSuiteRunResponse struct {
	EndTime                *time.Time             `json:"endTime"`
	ErrorReason            *string                `json:"errorReason"`
	StartTime              *time.Time             `json:"startTime"`
	Status                 *SuiteRunStatusEnum    `json:"status"`
	SuiteDefinitionID      *string                `json:"suiteDefinitionId"`
	SuiteDefinitionVersion *string                `json:"suiteDefinitionVersion"`
	SuiteRunArn            *string                `json:"suiteRunArn"`
	SuiteRunConfiguration  *SuiteRunConfiguration `json:"suiteRunConfiguration"`
	SuiteRunID             *string                `json:"suiteRunId"`
	Tags                   map[string]string      `json:"tags"`
	TestResult             *TestResult            `json:"testResult"`
}
