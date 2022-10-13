from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import exclusion
from . import faileditemdetails


@dataclass_json
@dataclass
class DescribeExclusionsResponse:
    exclusions: dict[str, exclusion.Exclusion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusions' }})
    failed_items: dict[str, faileditemdetails.FailedItemDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedItems' }})
    
