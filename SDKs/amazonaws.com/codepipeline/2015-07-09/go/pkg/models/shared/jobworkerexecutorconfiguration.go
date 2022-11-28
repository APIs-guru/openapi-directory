package shared

// JobWorkerExecutorConfiguration
// Details about the polling configuration for the <code>JobWorker</code> action engine, or executor.
type JobWorkerExecutorConfiguration struct {
	PollingAccounts          []string `json:"pollingAccounts,omitempty"`
	PollingServicePrincipals []string `json:"pollingServicePrincipals,omitempty"`
}
