package shared

import (
	"time"
)

type SuiteRunInformation struct {
	CreatedAt              *time.Time          `json:"createdAt,omitempty"`
	EndAt                  *time.Time          `json:"endAt,omitempty"`
	Failed                 *int64              `json:"failed,omitempty"`
	Passed                 *int64              `json:"passed,omitempty"`
	StartedAt              *time.Time          `json:"startedAt,omitempty"`
	Status                 *SuiteRunStatusEnum `json:"status,omitempty"`
	SuiteDefinitionID      *string             `json:"suiteDefinitionId,omitempty"`
	SuiteDefinitionName    *string             `json:"suiteDefinitionName,omitempty"`
	SuiteDefinitionVersion *string             `json:"suiteDefinitionVersion,omitempty"`
	SuiteRunID             *string             `json:"suiteRunId,omitempty"`
}
