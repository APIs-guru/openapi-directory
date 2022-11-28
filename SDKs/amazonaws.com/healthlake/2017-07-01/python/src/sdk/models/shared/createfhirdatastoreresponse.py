from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFhirDatastoreResponse:
    datastore_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreArn') }})
    datastore_endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreEndpoint') }})
    datastore_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreId') }})
    datastore_status: DatastoreStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreStatus') }})
    
