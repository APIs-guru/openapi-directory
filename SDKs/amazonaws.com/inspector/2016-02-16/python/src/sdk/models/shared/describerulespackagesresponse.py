from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import faileditemdetails
from . import rulespackage


@dataclass_json
@dataclass
class DescribeRulesPackagesResponse:
    failed_items: dict[str, faileditemdetails.FailedItemDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedItems' }})
    rules_packages: List[rulespackage.RulesPackage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesPackages' }})
    
