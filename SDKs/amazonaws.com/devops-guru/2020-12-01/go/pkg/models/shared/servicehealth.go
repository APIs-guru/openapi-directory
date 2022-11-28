package shared

// ServiceHealth
// Represents the health of an AWS service.
type ServiceHealth struct {
	Insight     *ServiceInsightHealth `json:"Insight,omitempty"`
	ServiceName *ServiceNameEnum      `json:"ServiceName,omitempty"`
}
