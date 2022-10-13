from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userdefinedfunction


@dataclass_json
@dataclass
class GetUserDefinedFunctionResponse:
    user_defined_function: Optional[userdefinedfunction.UserDefinedFunction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserDefinedFunction' }})
    
