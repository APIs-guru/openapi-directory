package shared

import (
	"time"
)

type UpdateSuiteDefinitionResponse struct {
	CreatedAt              *time.Time `json:"createdAt"`
	LastUpdatedAt          *time.Time `json:"lastUpdatedAt"`
	SuiteDefinitionArn     *string    `json:"suiteDefinitionArn"`
	SuiteDefinitionID      *string    `json:"suiteDefinitionId"`
	SuiteDefinitionName    *string    `json:"suiteDefinitionName"`
	SuiteDefinitionVersion *string    `json:"suiteDefinitionVersion"`
}
