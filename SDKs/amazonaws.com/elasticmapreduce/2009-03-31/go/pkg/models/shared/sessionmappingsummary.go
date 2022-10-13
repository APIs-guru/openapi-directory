package shared

import (
	"time"
)

type SessionMappingSummary struct {
	CreationTime     *time.Time        `json:"CreationTime"`
	IdentityID       *string           `json:"IdentityId"`
	IdentityName     *string           `json:"IdentityName"`
	IdentityType     *IdentityTypeEnum `json:"IdentityType"`
	SessionPolicyArn *string           `json:"SessionPolicyArn"`
	StudioID         *string           `json:"StudioId"`
}
