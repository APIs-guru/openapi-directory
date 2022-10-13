from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import crawlerlineagesettings_enum


@dataclass_json
@dataclass
class LineageConfiguration:
    crawler_lineage_settings: Optional[crawlerlineagesettings_enum.CrawlerLineageSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlerLineageSettings' }})
    
