from dataclasses import dataclass, field



@dataclass
class LoggingConfig:
    r"""LoggingConfig
    A complex type that controls whether access logs are written for the distribution.
    """
    
    bucket: str = field()
    enabled: bool = field()
    include_cookies: bool = field()
    prefix: str = field()
    
