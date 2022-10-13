from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import exportdescription


@dataclass_json
@dataclass
class DescribeExportOutput:
    export_description: Optional[exportdescription.ExportDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportDescription' }})
    
