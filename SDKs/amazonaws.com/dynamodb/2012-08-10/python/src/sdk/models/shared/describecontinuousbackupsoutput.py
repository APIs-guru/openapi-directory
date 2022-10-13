from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import continuousbackupsdescription


@dataclass_json
@dataclass
class DescribeContinuousBackupsOutput:
    continuous_backups_description: Optional[continuousbackupsdescription.ContinuousBackupsDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContinuousBackupsDescription' }})
    
