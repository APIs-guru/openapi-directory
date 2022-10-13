package shared

type PrivateConnectionProvisioningState struct {
	FailureCause   *PrivateConnectionProvisioningFailureCauseEnum `json:"failureCause"`
	FailureMessage *string                                        `json:"failureMessage"`
	Status         *PrivateConnectionProvisioningStatusEnum       `json:"status"`
}
