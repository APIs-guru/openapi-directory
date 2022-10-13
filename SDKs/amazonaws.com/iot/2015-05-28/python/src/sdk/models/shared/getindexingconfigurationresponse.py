from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import thinggroupindexingconfiguration
from . import thingindexingconfiguration


@dataclass_json
@dataclass
class GetIndexingConfigurationResponse:
    thing_group_indexing_configuration: Optional[thinggroupindexingconfiguration.ThingGroupIndexingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupIndexingConfiguration' }})
    thing_indexing_configuration: Optional[thingindexingconfiguration.ThingIndexingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingIndexingConfiguration' }})
    
