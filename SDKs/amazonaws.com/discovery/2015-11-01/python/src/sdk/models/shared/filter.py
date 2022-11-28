from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html\">Querying Discovered Configuration Items</a> in the <i>AWS Application Discovery Service User Guide</i>. </p>
    """
    
    condition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
