package shared

import (
	"time"
)

// ApplicationVersionDescription
// Describes the properties of an application version.
type ApplicationVersionDescription struct {
	ApplicationName        *string
	ApplicationVersionArn  *string
	BuildArn               *string
	DateCreated            *time.Time
	DateUpdated            *time.Time
	Description            *string
	SourceBuildInformation *SourceBuildInformation
	SourceBundle           *S3Location
	Status                 *ApplicationVersionStatusEnum
	VersionLabel           *string
}
