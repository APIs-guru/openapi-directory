from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceMetadataOptions:
    r"""InstanceMetadataOptions
    The metadata options for the instances. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds\">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
    """
    
    http_endpoint: Optional[InstanceMetadataEndpointStateEnum] = field(default=None)
    http_put_response_hop_limit: Optional[int] = field(default=None)
    http_tokens: Optional[InstanceMetadataHTTPTokensStateEnum] = field(default=None)
    
