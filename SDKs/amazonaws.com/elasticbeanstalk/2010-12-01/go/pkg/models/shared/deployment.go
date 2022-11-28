package shared

import (
	"time"
)

// Deployment
// Information about an application version deployment.
type Deployment struct {
	DeploymentID   *int64
	DeploymentTime *time.Time
	Status         *string
	VersionLabel   *string
}
