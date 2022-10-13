package shared

type EventIntegration struct {
	Description         *string           `json:"Description"`
	EventBridgeBus      *string           `json:"EventBridgeBus"`
	EventFilter         *EventFilter      `json:"EventFilter"`
	EventIntegrationArn *string           `json:"EventIntegrationArn"`
	Name                *string           `json:"Name"`
	Tags                map[string]string `json:"Tags"`
}
