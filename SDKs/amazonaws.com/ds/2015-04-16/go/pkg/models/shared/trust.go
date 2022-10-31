package shared

import (
"time")

type Trust struct {
    CreatedDateTime *time.Time `json:"CreatedDateTime,omitempty"`
    DirectoryID *string `json:"DirectoryId,omitempty"`
    LastUpdatedDateTime *time.Time `json:"LastUpdatedDateTime,omitempty"`
    RemoteDomainName *string `json:"RemoteDomainName,omitempty"`
    SelectiveAuth *SelectiveAuthEnum `json:"SelectiveAuth,omitempty"`
    StateLastUpdatedDateTime *time.Time `json:"StateLastUpdatedDateTime,omitempty"`
    TrustDirection *TrustDirectionEnum `json:"TrustDirection,omitempty"`
    TrustID *string `json:"TrustId,omitempty"`
    TrustState *TrustStateEnum `json:"TrustState,omitempty"`
    TrustStateReason *string `json:"TrustStateReason,omitempty"`
    TrustType *TrustTypeEnum `json:"TrustType,omitempty"`
    
}

