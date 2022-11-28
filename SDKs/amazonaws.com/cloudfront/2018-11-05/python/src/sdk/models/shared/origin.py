from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Origin:
    r"""Origin
    <p>A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), Amazon MediaStore, or other server from which CloudFront gets your files. This can also be an origin group, if you've created an origin group. You must specify at least one origin or origin group.</p> <p>For the current limit on the number of origins or origin groups that you can specify for a distribution, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront\">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p>
    """
    
    domain_name: str = field()
    id: str = field()
    custom_headers: Optional[CustomHeaders] = field(default=None)
    custom_origin_config: Optional[CustomOriginConfig] = field(default=None)
    origin_path: Optional[str] = field(default=None)
    s3_origin_config: Optional[S3OriginConfig] = field(default=None)
    
