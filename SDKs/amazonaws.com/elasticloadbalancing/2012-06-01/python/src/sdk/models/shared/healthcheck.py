from dataclasses import dataclass, field



@dataclass
class HealthCheck:
    r"""HealthCheck
    Information about a health check.
    """
    
    healthy_threshold: int = field()
    interval: int = field()
    target: str = field()
    timeout: int = field()
    unhealthy_threshold: int = field()
    
