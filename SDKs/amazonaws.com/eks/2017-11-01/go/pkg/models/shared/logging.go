package shared

// Logging
// An object representing the logging configuration for resources in your cluster.
type Logging struct {
	ClusterLogging []LogSetup `json:"clusterLogging,omitempty"`
}
