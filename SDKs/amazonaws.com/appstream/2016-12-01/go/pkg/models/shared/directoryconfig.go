package shared

import (
	"time"
)

// DirectoryConfig
// Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
type DirectoryConfig struct {
	CreatedTime                          *time.Time                 `json:"CreatedTime,omitempty"`
	DirectoryName                        string                     `json:"DirectoryName"`
	OrganizationalUnitDistinguishedNames []string                   `json:"OrganizationalUnitDistinguishedNames,omitempty"`
	ServiceAccountCredentials            *ServiceAccountCredentials `json:"ServiceAccountCredentials,omitempty"`
}
