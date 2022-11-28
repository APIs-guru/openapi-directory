from dataclasses import dataclass, field



@dataclass
class OriginCustomHeader:
    r"""OriginCustomHeader
    A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution. 
    """
    
    header_name: str = field()
    header_value: str = field()
    
