from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeRulesPackagesResponse:
    failed_items: dict[str, FailedItemDetails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    rules_packages: List[RulesPackage] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackages') }})
    
