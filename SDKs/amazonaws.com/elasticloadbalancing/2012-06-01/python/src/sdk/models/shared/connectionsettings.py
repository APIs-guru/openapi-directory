from dataclasses import dataclass, field



@dataclass
class ConnectionSettings:
    r"""ConnectionSettings
    Information about the <code>ConnectionSettings</code> attribute.
    """
    
    idle_timeout: int = field()
    
