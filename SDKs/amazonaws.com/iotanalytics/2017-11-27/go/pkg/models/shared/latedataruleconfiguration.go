package shared

// LateDataRuleConfiguration
// The information needed to configure a delta time session window.
type LateDataRuleConfiguration struct {
	DeltaTimeSessionWindowConfiguration *DeltaTimeSessionWindowConfiguration `json:"deltaTimeSessionWindowConfiguration,omitempty"`
}
