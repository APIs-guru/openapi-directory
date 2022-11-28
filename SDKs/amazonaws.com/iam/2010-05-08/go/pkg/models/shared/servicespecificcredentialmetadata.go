package shared

import (
	"time"
)

// ServiceSpecificCredentialMetadata
// Contains additional details about a service-specific credential.
type ServiceSpecificCredentialMetadata struct {
	CreateDate                  time.Time
	ServiceName                 string
	ServiceSpecificCredentialID string
	ServiceUserName             string
	Status                      StatusTypeEnum
	UserName                    string
}
