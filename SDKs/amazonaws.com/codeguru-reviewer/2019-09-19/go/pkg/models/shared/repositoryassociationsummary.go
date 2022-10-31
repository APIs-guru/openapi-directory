package shared

import (
"time")

type RepositoryAssociationSummary struct {
    AssociationArn *string `json:"AssociationArn,omitempty"`
    AssociationID *string `json:"AssociationId,omitempty"`
    ConnectionArn *string `json:"ConnectionArn,omitempty"`
    LastUpdatedTimeStamp *time.Time `json:"LastUpdatedTimeStamp,omitempty"`
    Name *string `json:"Name,omitempty"`
    Owner *string `json:"Owner,omitempty"`
    ProviderType *ProviderTypeEnum `json:"ProviderType,omitempty"`
    State *RepositoryAssociationStateEnum `json:"State,omitempty"`
    
}

