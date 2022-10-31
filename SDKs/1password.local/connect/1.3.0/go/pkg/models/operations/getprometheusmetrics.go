package operations


var GetPrometheusMetricsServers = []string{
	"http://localhost:8080",
}

type GetPrometheusMetricsRequest struct {
    ServerURL *string 
    
}

type GetPrometheusMetricsResponse struct {
    ContentType string 
    GetPrometheusMetrics200TextPlainString *string 
    StatusCode int64 
    
}

