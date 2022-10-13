from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogtarget
from . import dynamodbtarget
from . import jdbctarget
from . import mongodbtarget
from . import s3target


@dataclass_json
@dataclass
class CrawlerTargets:
    catalog_targets: Optional[List[catalogtarget.CatalogTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogTargets' }})
    dynamo_db_targets: Optional[List[dynamodbtarget.DynamoDbTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DynamoDBTargets' }})
    jdbc_targets: Optional[List[jdbctarget.JdbcTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JdbcTargets' }})
    mongo_db_targets: Optional[List[mongodbtarget.MongoDbTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MongoDBTargets' }})
    s3_targets: Optional[List[s3target.S3Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Targets' }})
    
