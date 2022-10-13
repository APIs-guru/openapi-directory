from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userdefinedfunctioninput


@dataclass_json
@dataclass
class CreateUserDefinedFunctionRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    function_input: userdefinedfunctioninput.UserDefinedFunctionInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionInput' }})
    
