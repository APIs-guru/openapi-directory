package shared

import (
"time")

type AssessmentReportMetadata struct {
    AssessmentID *string `json:"assessmentId,omitempty"`
    AssessmentName *string `json:"assessmentName,omitempty"`
    Author *string `json:"author,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *AssessmentReportStatusEnum `json:"status,omitempty"`
    
}

