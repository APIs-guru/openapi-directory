from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import functionconfiguration


@dataclass_json
@dataclass
class ListFunctionsResponse:
    functions: Optional[List[functionconfiguration.FunctionConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
