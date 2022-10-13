from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ElasticsearchDataSourceConfig:
    aws_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    
