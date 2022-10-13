from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sourcefrequency_enum
from . import sourcekeyword
from . import sourcesetupoption_enum
from . import sourcetype_enum


@dataclass_json
@dataclass
class ControlMappingSource:
    source_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDescription' }})
    source_frequency: Optional[sourcefrequency_enum.SourceFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceFrequency' }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceId' }})
    source_keyword: Optional[sourcekeyword.SourceKeyword] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceKeyword' }})
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceName' }})
    source_set_up_option: Optional[sourcesetupoption_enum.SourceSetUpOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceSetUpOption' }})
    source_type: Optional[sourcetype_enum.SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceType' }})
    troubleshooting_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'troubleshootingText' }})
    
