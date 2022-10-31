package shared

import (
"time")

type GetSuiteRunResponse struct {
    EndTime *time.Time `json:"endTime,omitempty"`
    ErrorReason *string `json:"errorReason,omitempty"`
    StartTime *time.Time `json:"startTime,omitempty"`
    Status *SuiteRunStatusEnum `json:"status,omitempty"`
    SuiteDefinitionID *string `json:"suiteDefinitionId,omitempty"`
    SuiteDefinitionVersion *string `json:"suiteDefinitionVersion,omitempty"`
    SuiteRunArn *string `json:"suiteRunArn,omitempty"`
    SuiteRunConfiguration *SuiteRunConfiguration `json:"suiteRunConfiguration,omitempty"`
    SuiteRunID *string `json:"suiteRunId,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    TestResult *TestResult `json:"testResult,omitempty"`
    
}

