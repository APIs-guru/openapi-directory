package shared

import (
	"time"
)

type ThingGroupMetadata struct {
	CreationDate            *time.Time        `json:"creationDate"`
	ParentGroupName         *string           `json:"parentGroupName"`
	RootToParentThingGroups []GroupNameAndArn `json:"rootToParentThingGroups"`
}
