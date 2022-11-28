package shared

// SecurityServicePolicyData
// Details about the security service that is being used to protect the resources.
type SecurityServicePolicyData struct {
	ManagedServiceData *string                 `json:"ManagedServiceData,omitempty"`
	Type               SecurityServiceTypeEnum `json:"Type"`
}
