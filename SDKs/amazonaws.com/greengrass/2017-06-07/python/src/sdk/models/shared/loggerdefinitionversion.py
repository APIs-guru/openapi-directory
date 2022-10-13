from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logger


@dataclass_json
@dataclass
class LoggerDefinitionVersion:
    loggers: Optional[List[logger.Logger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Loggers' }})
    
