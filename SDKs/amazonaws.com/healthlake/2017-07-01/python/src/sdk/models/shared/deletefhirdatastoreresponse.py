from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import datastorestatus_enum


@dataclass_json
@dataclass
class DeleteFhirDatastoreResponse:
    datastore_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreArn' }})
    datastore_endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreEndpoint' }})
    datastore_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreId' }})
    datastore_status: datastorestatus_enum.DatastoreStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreStatus' }})
    
