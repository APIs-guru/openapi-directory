from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatastoreProperties:
    r"""DatastoreProperties
    Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.
    """
    
    datastore_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreArn') }})
    datastore_endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreEndpoint') }})
    datastore_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreId') }})
    datastore_status: DatastoreStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreStatus') }})
    datastore_type_version: FhirVersionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreTypeVersion') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreName') }})
    preload_data_config: Optional[PreloadDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreloadDataConfig') }})
    sse_configuration: Optional[SseConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SseConfiguration') }})
    
