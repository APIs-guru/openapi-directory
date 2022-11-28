from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Crawler:
    r"""Crawler
    Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the Glue Data Catalog.
    """
    
    classifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classifiers') }})
    configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    crawl_elapsed_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlElapsedTime') }})
    crawler_security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerSecurityConfiguration') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    last_crawl: Optional[LastCrawlInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastCrawl') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lineage_configuration: Optional[LineageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineageConfiguration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    recrawl_policy: Optional[RecrawlPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecrawlPolicy') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    schedule: Optional[Schedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    schema_change_policy: Optional[SchemaChangePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaChangePolicy') }})
    state: Optional[CrawlerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    table_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablePrefix') }})
    targets: Optional[CrawlerTargets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
