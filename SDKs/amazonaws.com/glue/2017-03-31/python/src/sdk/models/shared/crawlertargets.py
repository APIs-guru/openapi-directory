from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CrawlerTargets:
    r"""CrawlerTargets
    Specifies data stores to crawl.
    """
    
    catalog_targets: Optional[List[CatalogTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogTargets') }})
    dynamo_db_targets: Optional[List[DynamoDbTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamoDBTargets') }})
    jdbc_targets: Optional[List[JdbcTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JdbcTargets') }})
    mongo_db_targets: Optional[List[MongoDbTarget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MongoDBTargets') }})
    s3_targets: Optional[List[S3Target]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Targets') }})
    
