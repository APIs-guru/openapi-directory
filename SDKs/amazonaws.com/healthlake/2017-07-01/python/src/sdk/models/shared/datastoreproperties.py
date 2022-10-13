from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datastorestatus_enum
from . import fhirversion_enum
from . import preloaddataconfig
from . import sseconfiguration


@dataclass_json
@dataclass
class DatastoreProperties:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datastore_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreArn' }})
    datastore_endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreEndpoint' }})
    datastore_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreId' }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreName' }})
    datastore_status: datastorestatus_enum.DatastoreStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreStatus' }})
    datastore_type_version: fhirversion_enum.FhirVersionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatastoreTypeVersion' }})
    preload_data_config: Optional[preloaddataconfig.PreloadDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreloadDataConfig' }})
    sse_configuration: Optional[sseconfiguration.SseConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SseConfiguration' }})
    
