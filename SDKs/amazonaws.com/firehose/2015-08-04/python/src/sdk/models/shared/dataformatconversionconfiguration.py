from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputformatconfiguration
from . import outputformatconfiguration
from . import schemaconfiguration


@dataclass_json
@dataclass
class DataFormatConversionConfiguration:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    input_format_configuration: Optional[inputformatconfiguration.InputFormatConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputFormatConfiguration' }})
    output_format_configuration: Optional[outputformatconfiguration.OutputFormatConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputFormatConfiguration' }})
    schema_configuration: Optional[schemaconfiguration.SchemaConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaConfiguration' }})
    
