from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import delimitedtextimportoptions
from . import destinationoptions


@dataclass_json
@dataclass
class ImportOptions:
    delimited_text_options: Optional[delimitedtextimportoptions.DelimitedTextImportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delimitedTextOptions' }})
    destination_options: Optional[destinationoptions.DestinationOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationOptions' }})
    
