from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InspectorServiceAttributes:
    r"""InspectorServiceAttributes
    This data type is used in the <a>Finding</a> data type.
    """
    
    schema_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    assessment_run_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRunArn') }})
    rules_package_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArn') }})
    
