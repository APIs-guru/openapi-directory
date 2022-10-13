package shared

import (
	"time"
)

type DirectoryConfig struct {
	CreatedTime                          *time.Time                 `json:"CreatedTime"`
	DirectoryName                        string                     `json:"DirectoryName"`
	OrganizationalUnitDistinguishedNames []string                   `json:"OrganizationalUnitDistinguishedNames"`
	ServiceAccountCredentials            *ServiceAccountCredentials `json:"ServiceAccountCredentials"`
}
