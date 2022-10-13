from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reporttype_enum


@dataclass_json
@dataclass
class ListThingRegistrationTaskReportsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    report_type: Optional[reporttype_enum.ReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportType' }})
    resource_links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceLinks' }})
    
