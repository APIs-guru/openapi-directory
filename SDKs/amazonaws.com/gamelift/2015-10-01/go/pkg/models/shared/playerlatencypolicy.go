package shared

// PlayerLatencyPolicy
// <p>Sets a latency cap for individual players when placing a game session. With a latency policy in force, a game session cannot be placed in a fleet location where a player reports latency higher than the cap. Latency policies are used only with placement request that provide player latency information. Player latency policies can be stacked to gradually relax latency requirements over time. </p> <p>Latency policies are part of a <a>GameSessionQueue</a>.</p>
type PlayerLatencyPolicy struct {
	MaximumIndividualPlayerLatencyMilliseconds *int64 `json:"MaximumIndividualPlayerLatencyMilliseconds,omitempty"`
	PolicyDurationSeconds                      *int64 `json:"PolicyDurationSeconds,omitempty"`
}
