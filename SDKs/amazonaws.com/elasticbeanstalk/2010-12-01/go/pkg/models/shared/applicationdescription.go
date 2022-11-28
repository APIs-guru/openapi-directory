package shared

import (
	"time"
)

// ApplicationDescription
// Describes the properties of an application.
type ApplicationDescription struct {
	ApplicationArn          *string
	ApplicationName         *string
	ConfigurationTemplates  []string
	DateCreated             *time.Time
	DateUpdated             *time.Time
	Description             *string
	ResourceLifecycleConfig *ApplicationResourceLifecycleConfig
	Versions                []string
}
