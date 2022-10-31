package shared

type ConnectorConfiguration struct {
	CanUseAsDestination              *bool                       `json:"canUseAsDestination,omitempty"`
	CanUseAsSource                   *bool                       `json:"canUseAsSource,omitempty"`
	ConnectorMetadata                *ConnectorMetadata          `json:"connectorMetadata,omitempty"`
	IsPrivateLinkEnabled             *bool                       `json:"isPrivateLinkEnabled,omitempty"`
	IsPrivateLinkEndpointURLRequired *bool                       `json:"isPrivateLinkEndpointUrlRequired,omitempty"`
	SupportedDestinationConnectors   []ConnectorTypeEnum         `json:"supportedDestinationConnectors,omitempty"`
	SupportedSchedulingFrequencies   []ScheduleFrequencyTypeEnum `json:"supportedSchedulingFrequencies,omitempty"`
	SupportedTriggerTypes            []TriggerTypeEnum           `json:"supportedTriggerTypes,omitempty"`
}
