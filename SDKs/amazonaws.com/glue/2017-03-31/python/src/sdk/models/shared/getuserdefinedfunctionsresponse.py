from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userdefinedfunction


@dataclass_json
@dataclass
class GetUserDefinedFunctionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    user_defined_functions: Optional[List[userdefinedfunction.UserDefinedFunction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserDefinedFunctions' }})
    
