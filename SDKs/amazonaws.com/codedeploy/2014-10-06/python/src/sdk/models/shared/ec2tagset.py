from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Ec2TagSet:
    r"""Ec2TagSet
    Information about groups of EC2 instance tags.
    """
    
    ec2_tag_set_list: Optional[List[List[Ec2TagFilter]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2TagSetList') }})
    
