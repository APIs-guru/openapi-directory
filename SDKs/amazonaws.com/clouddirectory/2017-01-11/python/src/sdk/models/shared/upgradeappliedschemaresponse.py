from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpgradeAppliedSchemaResponse:
    directory_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryArn' }})
    upgraded_schema_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpgradedSchemaArn' }})
    
