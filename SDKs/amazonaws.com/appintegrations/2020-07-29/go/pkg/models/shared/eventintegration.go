package shared

type EventIntegration struct {
	Description         *string           `json:"Description,omitempty"`
	EventBridgeBus      *string           `json:"EventBridgeBus,omitempty"`
	EventFilter         *EventFilter      `json:"EventFilter,omitempty"`
	EventIntegrationArn *string           `json:"EventIntegrationArn,omitempty"`
	Name                *string           `json:"Name,omitempty"`
	Tags                map[string]string `json:"Tags,omitempty"`
}
