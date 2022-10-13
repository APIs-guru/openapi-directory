package shared

import (
	"time"
)

type UpdateSystemModelsUpdateGroupClientRelationship struct {
	Active         *bool      `json:"Active" form:"name=Active"`
	ClientID       string     `json:"ClientID" form:"name=ClientID"`
	LastCheckin    *time.Time `json:"LastCheckin" form:"name=LastCheckin"`
	RelationshipID *string    `json:"RelationshipID" form:"name=RelationshipID"`
	UpdateGroupID  string     `json:"UpdateGroupID" form:"name=UpdateGroupID"`
}
