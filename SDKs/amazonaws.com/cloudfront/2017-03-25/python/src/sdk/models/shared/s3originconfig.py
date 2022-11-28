from dataclasses import dataclass, field



@dataclass
class S3OriginConfig:
    r"""S3OriginConfig
    A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin, use the <code>CustomOriginConfig</code> element instead.
    """
    
    origin_access_identity: str = field()
    
