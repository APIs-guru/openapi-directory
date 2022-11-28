package shared

import (
	"time"
)

// ServiceSpecificCredential
// Contains the details of a service-specific credential.
type ServiceSpecificCredential struct {
	CreateDate                  time.Time
	ServiceName                 string
	ServicePassword             string
	ServiceSpecificCredentialID string
	ServiceUserName             string
	Status                      StatusTypeEnum
	UserName                    string
}
