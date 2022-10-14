package shared

import (
	"time"
)

type DirectoryConfig struct {
	CreatedTime                          *time.Time                 `json:"CreatedTime,omitempty"`
	DirectoryName                        string                     `json:"DirectoryName"`
	OrganizationalUnitDistinguishedNames []string                   `json:"OrganizationalUnitDistinguishedNames,omitempty"`
	ServiceAccountCredentials            *ServiceAccountCredentials `json:"ServiceAccountCredentials,omitempty"`
}
