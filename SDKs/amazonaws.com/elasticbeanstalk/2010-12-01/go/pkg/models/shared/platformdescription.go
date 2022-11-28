package shared

import (
	"time"
)

// PlatformDescription
// Detailed information about a platform version.
type PlatformDescription struct {
	CustomAmiList                []CustomAmi
	DateCreated                  *time.Time
	DateUpdated                  *time.Time
	Description                  *string
	Frameworks                   []PlatformFramework
	Maintainer                   *string
	OperatingSystemName          *string
	OperatingSystemVersion       *string
	PlatformArn                  *string
	PlatformBranchLifecycleState *string
	PlatformBranchName           *string
	PlatformCategory             *string
	PlatformLifecycleState       *string
	PlatformName                 *string
	PlatformOwner                *string
	PlatformStatus               *PlatformStatusEnum
	PlatformVersion              *string
	ProgrammingLanguages         []PlatformProgrammingLanguage
	SolutionStackName            *string
	SupportedAddonList           []string
	SupportedTierList            []string
}
