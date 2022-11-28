package shared

// DescribeFleetPortSettingsOutput
// Represents the returned data in response to a request operation.
type DescribeFleetPortSettingsOutput struct {
	FleetArn           *string                   `json:"FleetArn,omitempty"`
	FleetID            *string                   `json:"FleetId,omitempty"`
	InboundPermissions []IPPermission            `json:"InboundPermissions,omitempty"`
	Location           *string                   `json:"Location,omitempty"`
	UpdateStatus       *LocationUpdateStatusEnum `json:"UpdateStatus,omitempty"`
}
