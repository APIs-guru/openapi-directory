from dataclasses import dataclass, field



@dataclass
class S3Origin:
    r"""S3Origin
    A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
    """
    
    domain_name: str = field()
    origin_access_identity: str = field()
    
