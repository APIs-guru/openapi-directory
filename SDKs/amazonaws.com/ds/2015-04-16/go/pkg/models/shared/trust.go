package shared

import (
	"time"
)

type Trust struct {
	CreatedDateTime          *time.Time          `json:"CreatedDateTime"`
	DirectoryID              *string             `json:"DirectoryId"`
	LastUpdatedDateTime      *time.Time          `json:"LastUpdatedDateTime"`
	RemoteDomainName         *string             `json:"RemoteDomainName"`
	SelectiveAuth            *SelectiveAuthEnum  `json:"SelectiveAuth"`
	StateLastUpdatedDateTime *time.Time          `json:"StateLastUpdatedDateTime"`
	TrustDirection           *TrustDirectionEnum `json:"TrustDirection"`
	TrustID                  *string             `json:"TrustId"`
	TrustState               *TrustStateEnum     `json:"TrustState"`
	TrustStateReason         *string             `json:"TrustStateReason"`
	TrustType                *TrustTypeEnum      `json:"TrustType"`
}
