from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sourcecredentialsinfo


@dataclass_json
@dataclass
class ListSourceCredentialsOutput:
    source_credentials_infos: Optional[List[sourcecredentialsinfo.SourceCredentialsInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCredentialsInfos' }})
    
