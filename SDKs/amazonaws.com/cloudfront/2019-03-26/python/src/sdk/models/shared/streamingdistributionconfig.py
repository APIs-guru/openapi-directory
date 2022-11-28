from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class StreamingDistributionConfig:
    r"""StreamingDistributionConfig
    The RTMP distribution's configuration information.
    """
    
    caller_reference: str = field()
    comment: str = field()
    enabled: bool = field()
    s3_origin: S3Origin = field()
    trusted_signers: TrustedSigners = field()
    aliases: Optional[Aliases] = field(default=None)
    logging: Optional[StreamingLoggingConfig] = field(default=None)
    price_class: Optional[PriceClassEnum] = field(default=None)
    
