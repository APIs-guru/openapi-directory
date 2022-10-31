package shared

import (
"time")

type Delegation struct {
    AssessmentID *string `json:"assessmentId,omitempty"`
    AssessmentName *string `json:"assessmentName,omitempty"`
    Comment *string `json:"comment,omitempty"`
    ControlSetID *string `json:"controlSetId,omitempty"`
    CreatedBy *string `json:"createdBy,omitempty"`
    CreationTime *time.Time `json:"creationTime,omitempty"`
    ID *string `json:"id,omitempty"`
    LastUpdated *time.Time `json:"lastUpdated,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    RoleType *RoleTypeEnum `json:"roleType,omitempty"`
    Status *DelegationStatusEnum `json:"status,omitempty"`
    
}

