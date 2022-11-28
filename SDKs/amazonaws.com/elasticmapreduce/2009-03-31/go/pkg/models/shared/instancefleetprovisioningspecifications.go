package shared

// InstanceFleetProvisioningSpecifications
// <p>The launch specification for Spot Instances in the fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand and Spot Instance allocation strategies are available in Amazon EMR version 5.12.1 and later.</p> </note>
type InstanceFleetProvisioningSpecifications struct {
	OnDemandSpecification *OnDemandProvisioningSpecification `json:"OnDemandSpecification,omitempty"`
	SpotSpecification     *SpotProvisioningSpecification     `json:"SpotSpecification,omitempty"`
}
