package shared

import (
	"time"
)

type SuiteRunInformation struct {
	CreatedAt              *time.Time          `json:"createdAt"`
	EndAt                  *time.Time          `json:"endAt"`
	Failed                 *int64              `json:"failed"`
	Passed                 *int64              `json:"passed"`
	StartedAt              *time.Time          `json:"startedAt"`
	Status                 *SuiteRunStatusEnum `json:"status"`
	SuiteDefinitionID      *string             `json:"suiteDefinitionId"`
	SuiteDefinitionName    *string             `json:"suiteDefinitionName"`
	SuiteDefinitionVersion *string             `json:"suiteDefinitionVersion"`
	SuiteRunID             *string             `json:"suiteRunId"`
}
