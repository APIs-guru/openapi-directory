package shared

import (
"time")

type StartSuiteRunResponse struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    SuiteRunArn *string `json:"suiteRunArn,omitempty"`
    SuiteRunID *string `json:"suiteRunId,omitempty"`
    
}

