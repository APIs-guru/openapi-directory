package shared

import (
	"time"
)

// ServiceLastAccessed
// <p>Contains details about the most recent attempt to access the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
type ServiceLastAccessed struct {
	LastAuthenticated          *time.Time
	LastAuthenticatedEntity    *string
	LastAuthenticatedRegion    *string
	ServiceName                string
	ServiceNamespace           string
	TotalAuthenticatedEntities *int64
	TrackedActionsLastAccessed []TrackedActionLastAccessed
}
