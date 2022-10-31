package shared

import (
"time")

type ProjectSummary struct {
    Arn *string `json:"arn,omitempty"`
    CreatedDate time.Time `json:"createdDate"`
    ProjectName string `json:"projectName"`
    Tags map[string]string `json:"tags,omitempty"`
    UpdatedDate time.Time `json:"updatedDate"`
    
}

