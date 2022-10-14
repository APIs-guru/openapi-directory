package shared

import (
	"time"
)

type GetSuiteDefinitionResponse struct {
	CreatedAt                    *time.Time                    `json:"createdAt,omitempty"`
	LastModifiedAt               *time.Time                    `json:"lastModifiedAt,omitempty"`
	LatestVersion                *string                       `json:"latestVersion,omitempty"`
	SuiteDefinitionArn           *string                       `json:"suiteDefinitionArn,omitempty"`
	SuiteDefinitionConfiguration *SuiteDefinitionConfiguration `json:"suiteDefinitionConfiguration,omitempty"`
	SuiteDefinitionID            *string                       `json:"suiteDefinitionId,omitempty"`
	SuiteDefinitionVersion       *string                       `json:"suiteDefinitionVersion,omitempty"`
	Tags                         map[string]string             `json:"tags,omitempty"`
}
