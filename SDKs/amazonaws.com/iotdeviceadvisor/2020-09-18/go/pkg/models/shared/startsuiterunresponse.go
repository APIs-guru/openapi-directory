package shared

import (
	"time"
)

type StartSuiteRunResponse struct {
	CreatedAt   *time.Time `json:"createdAt"`
	SuiteRunArn *string    `json:"suiteRunArn"`
	SuiteRunID  *string    `json:"suiteRunId"`
}
