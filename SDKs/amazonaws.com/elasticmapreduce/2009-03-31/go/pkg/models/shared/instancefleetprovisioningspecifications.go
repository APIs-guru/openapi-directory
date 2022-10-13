package shared

type InstanceFleetProvisioningSpecifications struct {
	OnDemandSpecification *OnDemandProvisioningSpecification `json:"OnDemandSpecification"`
	SpotSpecification     *SpotProvisioningSpecification     `json:"SpotSpecification"`
}
