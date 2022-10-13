package shared

import (
	"time"
)

type GetSuiteDefinitionResponse struct {
	CreatedAt                    *time.Time                    `json:"createdAt"`
	LastModifiedAt               *time.Time                    `json:"lastModifiedAt"`
	LatestVersion                *string                       `json:"latestVersion"`
	SuiteDefinitionArn           *string                       `json:"suiteDefinitionArn"`
	SuiteDefinitionConfiguration *SuiteDefinitionConfiguration `json:"suiteDefinitionConfiguration"`
	SuiteDefinitionID            *string                       `json:"suiteDefinitionId"`
	SuiteDefinitionVersion       *string                       `json:"suiteDefinitionVersion"`
	Tags                         map[string]string             `json:"tags"`
}
