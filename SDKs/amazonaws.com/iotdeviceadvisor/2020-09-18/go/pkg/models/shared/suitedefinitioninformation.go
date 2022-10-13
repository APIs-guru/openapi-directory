package shared

import (
	"time"
)

type SuiteDefinitionInformation struct {
	CreatedAt                *time.Time        `json:"createdAt"`
	DefaultDevices           []DeviceUnderTest `json:"defaultDevices"`
	IntendedForQualification *bool             `json:"intendedForQualification"`
	SuiteDefinitionID        *string           `json:"suiteDefinitionId"`
	SuiteDefinitionName      *string           `json:"suiteDefinitionName"`
}
