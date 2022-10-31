package shared



type UpdateFleetPortSettingsInput struct {
    FleetID string `json:"FleetId"`
    InboundPermissionAuthorizations []IPPermission `json:"InboundPermissionAuthorizations,omitempty"`
    InboundPermissionRevocations []IPPermission `json:"InboundPermissionRevocations,omitempty"`
    
}

