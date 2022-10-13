package shared

import (
	"time"
)

type SessionMappingDetail struct {
	CreationTime     *time.Time        `json:"CreationTime"`
	IdentityID       *string           `json:"IdentityId"`
	IdentityName     *string           `json:"IdentityName"`
	IdentityType     *IdentityTypeEnum `json:"IdentityType"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime"`
	SessionPolicyArn *string           `json:"SessionPolicyArn"`
	StudioID         *string           `json:"StudioId"`
}
