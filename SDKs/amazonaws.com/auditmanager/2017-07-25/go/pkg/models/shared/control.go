package shared

import (
	"time"
)

type Control struct {
	ActionPlanInstructions *string                `json:"actionPlanInstructions"`
	ActionPlanTitle        *string                `json:"actionPlanTitle"`
	Arn                    *string                `json:"arn"`
	ControlMappingSources  []ControlMappingSource `json:"controlMappingSources"`
	ControlSources         *string                `json:"controlSources"`
	CreatedAt              *time.Time             `json:"createdAt"`
	CreatedBy              *string                `json:"createdBy"`
	Description            *string                `json:"description"`
	ID                     *string                `json:"id"`
	LastUpdatedAt          *time.Time             `json:"lastUpdatedAt"`
	LastUpdatedBy          *string                `json:"lastUpdatedBy"`
	Name                   *string                `json:"name"`
	Tags                   map[string]string      `json:"tags"`
	TestingInformation     *string                `json:"testingInformation"`
	Type                   *ControlTypeEnum       `json:"type"`
}
