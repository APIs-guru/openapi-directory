package shared

import (
	"time"
)

// Permission
// Permissions designate which private CA actions can be performed by an AWS service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action, removed with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action, and listed with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action.
type Permission struct {
	Actions                 []ActionTypeEnum `json:"Actions,omitempty"`
	CertificateAuthorityArn *string          `json:"CertificateAuthorityArn,omitempty"`
	CreatedAt               *time.Time       `json:"CreatedAt,omitempty"`
	Policy                  *string          `json:"Policy,omitempty"`
	Principal               *string          `json:"Principal,omitempty"`
	SourceAccount           *string          `json:"SourceAccount,omitempty"`
}
