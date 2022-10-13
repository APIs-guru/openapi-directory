from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domain_enum
from . import tag


@dataclass_json
@dataclass
class CreateDatasetGroupRequest:
    dataset_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArns' }})
    dataset_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetGroupName' }})
    domain: domain_enum.DomainEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
