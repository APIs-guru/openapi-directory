package shared

import (
"time")

type DescribeProjectResult struct {
    Arn *string `json:"arn,omitempty"`
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    CreatedTimeStamp *time.Time `json:"createdTimeStamp,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    ProjectTemplateID *string `json:"projectTemplateId,omitempty"`
    StackID *string `json:"stackId,omitempty"`
    Status *ProjectStatus `json:"status,omitempty"`
    
}

