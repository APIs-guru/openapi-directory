from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reportexportconfig
from . import tag
from . import reporttype_enum


@dataclass_json
@dataclass
class CreateReportGroupInput:
    export_config: reportexportconfig.ReportExportConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportConfig' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: reporttype_enum.ReportTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
