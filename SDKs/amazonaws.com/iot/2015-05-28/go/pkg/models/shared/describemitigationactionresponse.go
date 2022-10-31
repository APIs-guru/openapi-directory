package shared

import (
"time")

type DescribeMitigationActionResponse struct {
    ActionArn *string `json:"actionArn,omitempty"`
    ActionID *string `json:"actionId,omitempty"`
    ActionName *string `json:"actionName,omitempty"`
    ActionParams *MitigationActionParams `json:"actionParams,omitempty"`
    ActionType *MitigationActionTypeEnum `json:"actionType,omitempty"`
    CreationDate *time.Time `json:"creationDate,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

