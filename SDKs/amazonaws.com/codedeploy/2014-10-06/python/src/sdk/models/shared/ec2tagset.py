from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ec2tagfilter


@dataclass_json
@dataclass
class Ec2TagSet:
    ec2_tag_set_list: Optional[List[List[ec2tagfilter.Ec2TagFilter]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2TagSetList' }})
    
