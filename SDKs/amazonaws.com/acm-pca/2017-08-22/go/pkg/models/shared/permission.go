package shared

import (
	"time"
)

type Permission struct {
	Actions                 []ActionTypeEnum `json:"Actions"`
	CertificateAuthorityArn *string          `json:"CertificateAuthorityArn"`
	CreatedAt               *time.Time       `json:"CreatedAt"`
	Policy                  *string          `json:"Policy"`
	Principal               *string          `json:"Principal"`
	SourceAccount           *string          `json:"SourceAccount"`
}
