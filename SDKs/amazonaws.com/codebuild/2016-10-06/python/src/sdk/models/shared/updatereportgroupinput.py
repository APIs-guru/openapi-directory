from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reportexportconfig
from . import tag


@dataclass_json
@dataclass
class UpdateReportGroupInput:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    export_config: Optional[reportexportconfig.ReportExportConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportConfig' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
