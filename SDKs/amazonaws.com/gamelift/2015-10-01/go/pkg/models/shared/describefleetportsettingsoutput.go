package shared

type DescribeFleetPortSettingsOutput struct {
	FleetArn           *string                   `json:"FleetArn"`
	FleetID            *string                   `json:"FleetId"`
	InboundPermissions []IPPermission            `json:"InboundPermissions"`
	Location           *string                   `json:"Location"`
	UpdateStatus       *LocationUpdateStatusEnum `json:"UpdateStatus"`
}
