from dataclasses import dataclass, field



@dataclass
class StreamingLoggingConfig:
    r"""StreamingLoggingConfig
    A complex type that controls whether access logs are written for this streaming distribution.
    """
    
    bucket: str = field()
    enabled: bool = field()
    prefix: str = field()
    
