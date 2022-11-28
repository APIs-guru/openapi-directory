package shared

import (
	"time"
)

// SuiteDefinitionInformation
// Information about the suite definition.
type SuiteDefinitionInformation struct {
	CreatedAt                *time.Time        `json:"createdAt,omitempty"`
	DefaultDevices           []DeviceUnderTest `json:"defaultDevices,omitempty"`
	IntendedForQualification *bool             `json:"intendedForQualification,omitempty"`
	SuiteDefinitionID        *string           `json:"suiteDefinitionId,omitempty"`
	SuiteDefinitionName      *string           `json:"suiteDefinitionName,omitempty"`
}
