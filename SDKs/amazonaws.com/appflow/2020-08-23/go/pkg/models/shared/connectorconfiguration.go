package shared

type ConnectorConfiguration struct {
	CanUseAsDestination              *bool                       `json:"canUseAsDestination"`
	CanUseAsSource                   *bool                       `json:"canUseAsSource"`
	ConnectorMetadata                *ConnectorMetadata          `json:"connectorMetadata"`
	IsPrivateLinkEnabled             *bool                       `json:"isPrivateLinkEnabled"`
	IsPrivateLinkEndpointURLRequired *bool                       `json:"isPrivateLinkEndpointUrlRequired"`
	SupportedDestinationConnectors   []ConnectorTypeEnum         `json:"supportedDestinationConnectors"`
	SupportedSchedulingFrequencies   []ScheduleFrequencyTypeEnum `json:"supportedSchedulingFrequencies"`
	SupportedTriggerTypes            []TriggerTypeEnum           `json:"supportedTriggerTypes"`
}
