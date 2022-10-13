from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reportwithrawdata
from . import reportgrouptrendstats


@dataclass_json
@dataclass
class GetReportGroupTrendOutput:
    raw_data: Optional[List[reportwithrawdata.ReportWithRawData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawData' }})
    stats: Optional[reportgrouptrendstats.ReportGroupTrendStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
