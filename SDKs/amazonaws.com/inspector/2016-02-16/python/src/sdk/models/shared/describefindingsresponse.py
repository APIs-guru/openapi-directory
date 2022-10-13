from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import faileditemdetails
from . import finding


@dataclass_json
@dataclass
class DescribeFindingsResponse:
    failed_items: dict[str, faileditemdetails.FailedItemDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedItems' }})
    findings: List[finding.Finding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findings' }})
    
