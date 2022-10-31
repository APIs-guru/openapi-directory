package shared

import (
"time")

type UpdateSuiteDefinitionResponse struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
    SuiteDefinitionArn *string `json:"suiteDefinitionArn,omitempty"`
    SuiteDefinitionID *string `json:"suiteDefinitionId,omitempty"`
    SuiteDefinitionName *string `json:"suiteDefinitionName,omitempty"`
    SuiteDefinitionVersion *string `json:"suiteDefinitionVersion,omitempty"`
    
}

