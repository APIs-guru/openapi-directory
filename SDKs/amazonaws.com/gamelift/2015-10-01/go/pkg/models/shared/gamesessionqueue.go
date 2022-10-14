package shared

type GameSessionQueue struct {
	CustomEventData       *string                       `json:"CustomEventData,omitempty"`
	Destinations          []GameSessionQueueDestination `json:"Destinations,omitempty"`
	FilterConfiguration   *FilterConfiguration          `json:"FilterConfiguration,omitempty"`
	GameSessionQueueArn   *string                       `json:"GameSessionQueueArn,omitempty"`
	Name                  *string                       `json:"Name,omitempty"`
	NotificationTarget    *string                       `json:"NotificationTarget,omitempty"`
	PlayerLatencyPolicies []PlayerLatencyPolicy         `json:"PlayerLatencyPolicies,omitempty"`
	PriorityConfiguration *PriorityConfiguration        `json:"PriorityConfiguration,omitempty"`
	TimeoutInSeconds      *int64                        `json:"TimeoutInSeconds,omitempty"`
}
