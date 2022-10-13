package shared

type SecurityServicePolicyData struct {
	ManagedServiceData *string                 `json:"ManagedServiceData"`
	Type               SecurityServiceTypeEnum `json:"Type"`
}
