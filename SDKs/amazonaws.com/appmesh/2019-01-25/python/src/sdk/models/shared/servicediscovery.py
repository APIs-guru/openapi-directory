from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awscloudmapservicediscovery
from . import dnsservicediscovery


@dataclass_json
@dataclass
class ServiceDiscovery:
    aws_cloud_map: Optional[awscloudmapservicediscovery.AwsCloudMapServiceDiscovery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsCloudMap' }})
    dns: Optional[dnsservicediscovery.DNSServiceDiscovery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns' }})
    
