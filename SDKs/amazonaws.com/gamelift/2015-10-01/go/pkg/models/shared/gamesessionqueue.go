package shared

type GameSessionQueue struct {
	CustomEventData       *string                       `json:"CustomEventData"`
	Destinations          []GameSessionQueueDestination `json:"Destinations"`
	FilterConfiguration   *FilterConfiguration          `json:"FilterConfiguration"`
	GameSessionQueueArn   *string                       `json:"GameSessionQueueArn"`
	Name                  *string                       `json:"Name"`
	NotificationTarget    *string                       `json:"NotificationTarget"`
	PlayerLatencyPolicies []PlayerLatencyPolicy         `json:"PlayerLatencyPolicies"`
	PriorityConfiguration *PriorityConfiguration        `json:"PriorityConfiguration"`
	TimeoutInSeconds      *int64                        `json:"TimeoutInSeconds"`
}
