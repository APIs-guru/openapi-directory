package shared

type UpdateFleetPortSettingsInput struct {
	FleetID                         string         `json:"FleetId"`
	InboundPermissionAuthorizations []IPPermission `json:"InboundPermissionAuthorizations"`
	InboundPermissionRevocations    []IPPermission `json:"InboundPermissionRevocations"`
}
