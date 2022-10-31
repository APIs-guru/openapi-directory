package shared

import (
	"time"
)

type Permission struct {
	Actions                 []ActionTypeEnum `json:"Actions,omitempty"`
	CertificateAuthorityArn *string          `json:"CertificateAuthorityArn,omitempty"`
	CreatedAt               *time.Time       `json:"CreatedAt,omitempty"`
	Policy                  *string          `json:"Policy,omitempty"`
	Principal               *string          `json:"Principal,omitempty"`
	SourceAccount           *string          `json:"SourceAccount,omitempty"`
}
