from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CustomOriginConfig:
    r"""CustomOriginConfig
    A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html\">configured with static website hosting</a> <i>is</i> a custom origin.
    """
    
    http_port: int = field()
    https_port: int = field()
    origin_protocol_policy: OriginProtocolPolicyEnum = field()
    origin_keepalive_timeout: Optional[int] = field(default=None)
    origin_read_timeout: Optional[int] = field(default=None)
    origin_ssl_protocols: Optional[OriginSslProtocols] = field(default=None)
    
