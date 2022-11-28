package shared

// ServerProcess
// A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Server process configurations are part of a fleet's <a>RuntimeConfiguration</a>.
type ServerProcess struct {
	ConcurrentExecutions int64   `json:"ConcurrentExecutions"`
	LaunchPath           string  `json:"LaunchPath"`
	Parameters           *string `json:"Parameters,omitempty"`
}
