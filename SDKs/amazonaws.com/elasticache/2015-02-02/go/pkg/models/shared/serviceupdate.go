package shared

import (
	"time"
)

// ServiceUpdate
// An update that you can apply to your Redis clusters.
type ServiceUpdate struct {
	AutoUpdateAfterRecommendedApplyByDate *bool
	Engine                                *string
	EngineVersion                         *string
	EstimatedUpdateTime                   *string
	ServiceUpdateDescription              *string
	ServiceUpdateEndDate                  *time.Time
	ServiceUpdateName                     *string
	ServiceUpdateRecommendedApplyByDate   *time.Time
	ServiceUpdateReleaseDate              *time.Time
	ServiceUpdateSeverity                 *ServiceUpdateSeverityEnum
	ServiceUpdateStatus                   *ServiceUpdateStatusEnum
	ServiceUpdateType                     *ServiceUpdateTypeEnum
}
