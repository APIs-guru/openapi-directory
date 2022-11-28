from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LaunchTemplateInstanceMetadataOptions:
    r"""LaunchTemplateInstanceMetadataOptions
    The metadata options for the instance. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html\">Instance Metadata and User Data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
    """
    
    http_endpoint: Optional[LaunchTemplateInstanceMetadataEndpointStateEnum] = field(default=None)
    http_protocol_ipv6: Optional[LaunchTemplateInstanceMetadataProtocolIpv6Enum] = field(default=None)
    http_put_response_hop_limit: Optional[int] = field(default=None)
    http_tokens: Optional[LaunchTemplateHTTPTokensStateEnum] = field(default=None)
    state: Optional[LaunchTemplateInstanceMetadataOptionsStateEnum] = field(default=None)
    
