from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import glueconfiguration


@dataclass_json
@dataclass
class S3DestinationConfiguration:
    bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    glue_configuration: Optional[glueconfiguration.GlueConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glueConfiguration' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
