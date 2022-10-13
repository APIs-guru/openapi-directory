package shared

import (
	"time"
)

type CreateSuiteDefinitionResponse struct {
	CreatedAt           *time.Time `json:"createdAt"`
	SuiteDefinitionArn  *string    `json:"suiteDefinitionArn"`
	SuiteDefinitionID   *string    `json:"suiteDefinitionId"`
	SuiteDefinitionName *string    `json:"suiteDefinitionName"`
}
