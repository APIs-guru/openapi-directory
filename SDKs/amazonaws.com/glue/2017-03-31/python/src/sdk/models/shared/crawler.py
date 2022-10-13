from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lastcrawlinfo
from . import lineageconfiguration
from . import recrawlpolicy
from . import schedule
from . import schemachangepolicy
from . import crawlerstate_enum
from . import crawlertargets


@dataclass_json
@dataclass
class Crawler:
    classifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Classifiers' }})
    configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    crawl_elapsed_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlElapsedTime' }})
    crawler_security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlerSecurityConfiguration' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_crawl: Optional[lastcrawlinfo.LastCrawlInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastCrawl' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lineage_configuration: Optional[lineageconfiguration.LineageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineageConfiguration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    recrawl_policy: Optional[recrawlpolicy.RecrawlPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecrawlPolicy' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    schedule: Optional[schedule.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    schema_change_policy: Optional[schemachangepolicy.SchemaChangePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaChangePolicy' }})
    state: Optional[crawlerstate_enum.CrawlerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    table_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TablePrefix' }})
    targets: Optional[crawlertargets.CrawlerTargets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
