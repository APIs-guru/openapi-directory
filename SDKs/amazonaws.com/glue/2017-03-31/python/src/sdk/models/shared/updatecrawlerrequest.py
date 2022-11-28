from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateCrawlerRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    classifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classifiers') }})
    configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    crawler_security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerSecurityConfiguration') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    lineage_configuration: Optional[LineageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineageConfiguration') }})
    recrawl_policy: Optional[RecrawlPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecrawlPolicy') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    schema_change_policy: Optional[SchemaChangePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaChangePolicy') }})
    table_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablePrefix') }})
    targets: Optional[CrawlerTargets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    
