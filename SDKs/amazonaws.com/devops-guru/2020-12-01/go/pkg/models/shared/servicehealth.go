package shared

type ServiceHealth struct {
	Insight     *ServiceInsightHealth `json:"Insight"`
	ServiceName *ServiceNameEnum      `json:"ServiceName"`
}
