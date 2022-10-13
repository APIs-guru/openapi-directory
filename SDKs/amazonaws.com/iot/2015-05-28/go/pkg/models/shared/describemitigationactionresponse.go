package shared

import (
	"time"
)

type DescribeMitigationActionResponse struct {
	ActionArn        *string                   `json:"actionArn"`
	ActionID         *string                   `json:"actionId"`
	ActionName       *string                   `json:"actionName"`
	ActionParams     *MitigationActionParams   `json:"actionParams"`
	ActionType       *MitigationActionTypeEnum `json:"actionType"`
	CreationDate     *time.Time                `json:"creationDate"`
	LastModifiedDate *time.Time                `json:"lastModifiedDate"`
	RoleArn          *string                   `json:"roleArn"`
}
