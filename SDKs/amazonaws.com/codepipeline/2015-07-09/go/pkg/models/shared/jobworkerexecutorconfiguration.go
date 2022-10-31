package shared

type JobWorkerExecutorConfiguration struct {
	PollingAccounts          []string `json:"pollingAccounts,omitempty"`
	PollingServicePrincipals []string `json:"pollingServicePrincipals,omitempty"`
}
