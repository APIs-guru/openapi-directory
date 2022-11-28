package shared

import (
	"time"
)

// EnvironmentDescription
// Describes the properties of an environment.
type EnvironmentDescription struct {
	AbortableOperationInProgress *bool
	ApplicationName              *string
	Cname                        *string
	DateCreated                  *time.Time
	DateUpdated                  *time.Time
	Description                  *string
	EndpointURL                  *string
	EnvironmentArn               *string
	EnvironmentID                *string
	EnvironmentLinks             []EnvironmentLink
	EnvironmentName              *string
	Health                       *EnvironmentHealthEnum
	HealthStatus                 *EnvironmentHealthStatusEnum
	OperationsRole               *string
	PlatformArn                  *string
	Resources                    *EnvironmentResourcesDescription
	SolutionStackName            *string
	Status                       *EnvironmentStatusEnum
	TemplateName                 *string
	Tier                         *EnvironmentTier
	VersionLabel                 *string
}
