package shared

// MinimumHealthyHosts
// Information about minimum healthy instance.
type MinimumHealthyHosts struct {
	Type  *MinimumHealthyHostsTypeEnum `json:"type,omitempty"`
	Value *int64                       `json:"value,omitempty"`
}
