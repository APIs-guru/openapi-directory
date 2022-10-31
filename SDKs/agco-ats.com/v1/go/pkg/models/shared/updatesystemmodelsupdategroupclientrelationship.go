package shared

import (
"time")

type UpdateSystemModelsUpdateGroupClientRelationship struct {
    Active *bool `json:"Active,omitempty" form:"name=Active"`
    ClientID string `json:"ClientID" form:"name=ClientID"`
    LastCheckin *time.Time `json:"LastCheckin,omitempty" form:"name=LastCheckin"`
    RelationshipID *string `json:"RelationshipID,omitempty" form:"name=RelationshipID"`
    UpdateGroupID string `json:"UpdateGroupID" form:"name=UpdateGroupID"`
    
}

