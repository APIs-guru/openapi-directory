package shared

// GreenFleetProvisioningOption
// Information about the instances that belong to the replacement environment in a blue/green deployment.
type GreenFleetProvisioningOption struct {
	Action *GreenFleetProvisioningActionEnum `json:"action,omitempty"`
}
