package shared

import (
"time")

type AccessPreviewFinding struct {
    Action []string `json:"action,omitempty"`
    ChangeType FindingChangeTypeEnum `json:"changeType"`
    Condition map[string]string `json:"condition,omitempty"`
    CreatedAt time.Time `json:"createdAt"`
    Error *string `json:"error,omitempty"`
    ExistingFindingID *string `json:"existingFindingId,omitempty"`
    ExistingFindingStatus *FindingStatusEnum `json:"existingFindingStatus,omitempty"`
    ID string `json:"id"`
    IsPublic *bool `json:"isPublic,omitempty"`
    Principal map[string]string `json:"principal,omitempty"`
    Resource *string `json:"resource,omitempty"`
    ResourceOwnerAccount string `json:"resourceOwnerAccount"`
    ResourceType ResourceTypeEnum `json:"resourceType"`
    Sources []FindingSource `json:"sources,omitempty"`
    Status FindingStatusEnum `json:"status"`
    
}

