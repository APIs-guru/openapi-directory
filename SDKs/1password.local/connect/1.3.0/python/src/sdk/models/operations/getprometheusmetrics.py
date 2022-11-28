from dataclasses import dataclass, field
from typing import Optional


GET_PROMETHEUS_METRICS_SERVERS = [
	"http://localhost:8080",
]


@dataclass
class GetPrometheusMetricsRequest:
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetPrometheusMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    get_prometheus_metrics_200_text_plain_string: Optional[str] = field(default=None)
    
