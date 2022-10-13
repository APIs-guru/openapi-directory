from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import faileditemdetails


@dataclass_json
@dataclass
class RemoveAttributesFromFindingsResponse:
    failed_items: dict[str, faileditemdetails.FailedItemDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedItems' }})
    
