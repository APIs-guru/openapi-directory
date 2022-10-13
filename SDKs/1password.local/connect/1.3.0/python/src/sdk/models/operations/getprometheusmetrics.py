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
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
