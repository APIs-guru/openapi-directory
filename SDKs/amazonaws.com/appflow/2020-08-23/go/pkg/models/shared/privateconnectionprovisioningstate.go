package shared

// PrivateConnectionProvisioningState
//
//	Specifies the private connection provisioning state.
type PrivateConnectionProvisioningState struct {
	FailureCause   *PrivateConnectionProvisioningFailureCauseEnum `json:"failureCause,omitempty"`
	FailureMessage *string                                        `json:"failureMessage,omitempty"`
	Status         *PrivateConnectionProvisioningStatusEnum       `json:"status,omitempty"`
}
