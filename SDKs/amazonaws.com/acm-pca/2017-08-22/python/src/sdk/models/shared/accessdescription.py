from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import generalname
from . import accessmethod


@dataclass_json
@dataclass
class AccessDescription:
    access_location: generalname.GeneralName = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessLocation' }})
    access_method: accessmethod.AccessMethod = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessMethod' }})
    
