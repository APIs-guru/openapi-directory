from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SparkSubmitJobDriver:
    entry_point: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPoint' }})
    entry_point_arguments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPointArguments' }})
    spark_submit_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkSubmitParameters' }})
    
