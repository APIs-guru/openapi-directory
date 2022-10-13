package shared

type JobWorkerExecutorConfiguration struct {
	PollingAccounts          []string `json:"pollingAccounts"`
	PollingServicePrincipals []string `json:"pollingServicePrincipals"`
}
