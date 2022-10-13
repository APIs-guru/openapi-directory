from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lineageconfiguration
from . import recrawlpolicy
from . import schemachangepolicy
from . import crawlertargets


@dataclass_json
@dataclass
class CreateCrawlerRequest:
    classifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Classifiers' }})
    configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    crawler_security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CrawlerSecurityConfiguration' }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    lineage_configuration: Optional[lineageconfiguration.LineageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineageConfiguration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    recrawl_policy: Optional[recrawlpolicy.RecrawlPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecrawlPolicy' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    schema_change_policy: Optional[schemachangepolicy.SchemaChangePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaChangePolicy' }})
    table_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TablePrefix' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    targets: crawlertargets.CrawlerTargets = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
