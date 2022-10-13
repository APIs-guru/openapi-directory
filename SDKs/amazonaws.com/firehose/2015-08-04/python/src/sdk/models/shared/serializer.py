from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orcserde
from . import parquetserde


@dataclass_json
@dataclass
class Serializer:
    orc_ser_de: Optional[orcserde.OrcSerDe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrcSerDe' }})
    parquet_ser_de: Optional[parquetserde.ParquetSerDe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParquetSerDe' }})
    
