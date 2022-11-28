from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExportFilter:
    r"""ExportFilter
    Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href=\"http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html\">StartExportTask</a> action.
    """
    
    condition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
