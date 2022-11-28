package shared

// ServiceResourceCost
// An object that contains information about the estimated monthly cost to analyze an AWS resource. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
type ServiceResourceCost struct {
	Cost     *float64                                `json:"Cost,omitempty"`
	Count    *int64                                  `json:"Count,omitempty"`
	State    *CostEstimationServiceResourceStateEnum `json:"State,omitempty"`
	Type     *string                                 `json:"Type,omitempty"`
	UnitCost *float64                                `json:"UnitCost,omitempty"`
}
