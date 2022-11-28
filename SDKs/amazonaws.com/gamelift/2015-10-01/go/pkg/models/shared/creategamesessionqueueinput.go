package shared

// CreateGameSessionQueueInput
// Represents the input for a request operation.
type CreateGameSessionQueueInput struct {
	CustomEventData       *string                       `json:"CustomEventData,omitempty"`
	Destinations          []GameSessionQueueDestination `json:"Destinations,omitempty"`
	FilterConfiguration   *FilterConfiguration          `json:"FilterConfiguration,omitempty"`
	Name                  string                        `json:"Name"`
	NotificationTarget    *string                       `json:"NotificationTarget,omitempty"`
	PlayerLatencyPolicies []PlayerLatencyPolicy         `json:"PlayerLatencyPolicies,omitempty"`
	PriorityConfiguration *PriorityConfiguration        `json:"PriorityConfiguration,omitempty"`
	Tags                  []Tag                         `json:"Tags,omitempty"`
	TimeoutInSeconds      *int64                        `json:"TimeoutInSeconds,omitempty"`
}
