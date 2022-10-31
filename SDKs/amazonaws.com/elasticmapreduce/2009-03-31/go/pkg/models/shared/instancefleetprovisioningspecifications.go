package shared



type InstanceFleetProvisioningSpecifications struct {
    OnDemandSpecification *OnDemandProvisioningSpecification `json:"OnDemandSpecification,omitempty"`
    SpotSpecification *SpotProvisioningSpecification `json:"SpotSpecification,omitempty"`
    
}

