package shared

// GameSessionQueue
// <p>Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSessionQueue</a> | <a>DescribeGameSessionQueues</a> | <a>UpdateGameSessionQueue</a> </p>
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
