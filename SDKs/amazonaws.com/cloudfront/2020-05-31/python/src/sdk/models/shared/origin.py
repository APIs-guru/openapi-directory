from dataclasses import dataclass, field
from typing import Any,Optional
from . import *


@dataclass
class Origin:
    r"""Origin
    <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not configured with static website hosting.</p> </li> <li> <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage endpoint</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions\">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p>
    """
    
    domain_name: str = field()
    id: str = field()
    connection_attempts: Optional[int] = field(default=None)
    connection_timeout: Optional[int] = field(default=None)
    custom_headers: Optional[CustomHeaders] = field(default=None)
    custom_origin_config: Optional[CustomOriginConfig] = field(default=None)
    origin_path: Optional[str] = field(default=None)
    origin_shield: Optional[OriginShield] = field(default=None)
    s3_origin_config: Optional[S3OriginConfig] = field(default=None)
    
