from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awscloudmapinstanceattribute


@dataclass_json
@dataclass
class AwsCloudMapServiceDiscovery:
    attributes: Optional[List[awscloudmapinstanceattribute.AwsCloudMapInstanceAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    namespace_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceName' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
