from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListRulesPackagesResponse:
    rules_package_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
