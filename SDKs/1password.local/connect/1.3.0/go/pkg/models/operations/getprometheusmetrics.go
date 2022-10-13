package operations

var GetPrometheusMetricsServers = []string{
	"http://localhost:8080",
}

type GetPrometheusMetricsRequest struct {
	ServerURL *string
}

type GetPrometheusMetricsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
