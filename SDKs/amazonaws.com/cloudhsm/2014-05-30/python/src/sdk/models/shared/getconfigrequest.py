from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import clientversion_enum


@dataclass_json
@dataclass
class GetConfigRequest:
    client_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientArn' }})
    client_version: clientversion_enum.ClientVersionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientVersion' }})
    hapg_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HapgList' }})
    
