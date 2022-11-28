from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeRulesPackagesRequest:
    rules_package_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    locale: Optional[LocaleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    
