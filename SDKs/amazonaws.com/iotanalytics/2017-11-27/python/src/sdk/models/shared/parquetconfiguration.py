from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParquetConfiguration:
    r"""ParquetConfiguration
    Contains the configuration information of the Parquet format.
    """
    
    schema_definition: Optional[SchemaDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaDefinition') }})
    
