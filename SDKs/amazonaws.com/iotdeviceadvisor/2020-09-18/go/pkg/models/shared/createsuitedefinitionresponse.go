package shared

import (
	"time"
)

type CreateSuiteDefinitionResponse struct {
	CreatedAt           *time.Time `json:"createdAt,omitempty"`
	SuiteDefinitionArn  *string    `json:"suiteDefinitionArn,omitempty"`
	SuiteDefinitionID   *string    `json:"suiteDefinitionId,omitempty"`
	SuiteDefinitionName *string    `json:"suiteDefinitionName,omitempty"`
}
