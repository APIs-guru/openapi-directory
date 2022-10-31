package shared



type ServiceHealth struct {
    Insight *ServiceInsightHealth `json:"Insight,omitempty"`
    ServiceName *ServiceNameEnum `json:"ServiceName,omitempty"`
    
}

