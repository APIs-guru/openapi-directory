from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hivejsonserde
from . import openxjsonserde


@dataclass_json
@dataclass
class Deserializer:
    hive_json_ser_de: Optional[hivejsonserde.HiveJSONSerDe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HiveJsonSerDe' }})
    open_x_json_ser_de: Optional[openxjsonserde.OpenXJSONSerDe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenXJsonSerDe' }})
    
