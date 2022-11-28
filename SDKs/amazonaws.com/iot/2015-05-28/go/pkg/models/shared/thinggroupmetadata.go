package shared

import (
	"time"
)

// ThingGroupMetadata
// Thing group metadata.
type ThingGroupMetadata struct {
	CreationDate            *time.Time        `json:"creationDate,omitempty"`
	ParentGroupName         *string           `json:"parentGroupName,omitempty"`
	RootToParentThingGroups []GroupNameAndArn `json:"rootToParentThingGroups,omitempty"`
}
