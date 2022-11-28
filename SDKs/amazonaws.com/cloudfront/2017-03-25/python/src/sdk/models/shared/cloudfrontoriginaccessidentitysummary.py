from dataclasses import dataclass, field



@dataclass
class CloudFrontOriginAccessIdentitySummary:
    r"""CloudFrontOriginAccessIdentitySummary
    Summary of the information about a CloudFront origin access identity.
    """
    
    comment: str = field()
    id: str = field()
    s3_canonical_user_id: str = field()
    
