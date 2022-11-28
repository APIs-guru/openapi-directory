package shared

import (
	"time"
)

// AccessKeyMetadata
// <p>Contains information about an Amazon Web Services access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p>
type AccessKeyMetadata struct {
	AccessKeyID *string
	CreateDate  *time.Time
	Status      *StatusTypeEnum
	UserName    *string
}
