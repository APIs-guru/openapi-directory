from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InspectorServiceAttributes:
    assessment_run_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentRunArn' }})
    rules_package_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesPackageArn' }})
    schema_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    
