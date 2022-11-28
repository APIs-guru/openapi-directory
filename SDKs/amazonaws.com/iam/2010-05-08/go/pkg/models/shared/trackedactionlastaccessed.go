package shared

import (
	"time"
)

// TrackedActionLastAccessed
// <p>Contains details about the most recent attempt to access an action within the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
type TrackedActionLastAccessed struct {
	ActionName         *string
	LastAccessedEntity *string
	LastAccessedRegion *string
	LastAccessedTime   *time.Time
}
